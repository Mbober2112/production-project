import { getIsLoading } from "../../model/selectors/getIsLoading/getIsLoading";
import { getLogin } from "../../model/selectors/getLogin/getLogin";
import { getPassword } from "../../model/selectors/getPassword/getPassword";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./LoginForm.module.scss";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const login = useSelector(getLogin);
  const password = useSelector(getPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getIsLoading);

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
