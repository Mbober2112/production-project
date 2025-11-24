import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { login, password, error, isLoading } = useSelector(getLoginState);

  const onChangeLogin = useCallback(
    (value: string) => {
      dispatch(loginActions.setLogin(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLogin = useCallback(() => {
    dispatch(
      loginByUsername({
        login: login,
        password: password,
      })
    );
  }, [dispatch, login, password]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t("authorization")} />
      {error && <Text text={t("authError")} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        placeholder={t("enterLogin")}
        value={login}
        onChange={onChangeLogin}
      />
      <Input
        type="text"
        placeholder={t("enterPassword")}
        value={password}
        onChange={onChangePassword}
      />
      <Button className={cls.enterBtn} disabled={isLoading} onClick={onLogin}>
        {t("Enter")}
      </Button>
    </div>
  );
});
