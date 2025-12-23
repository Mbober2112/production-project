import { getUserAuthData, userActions } from "entitiesModule/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onShowAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div
      data-testid="navbar"
      className={classNames(cls.navbar, {}, [className])}
    >
      <ThemeSwitcher />
      <LangSwitcher />
      {authData ? (
        <div className={classNames(cls.profileWrapper)}>
          <AppLink
            to={`${RoutePath.profile}${authData.id}`}
            className={classNames(cls.profile)}
          >
            <span className={classNames(cls.link)}>Профиль</span>
          </AppLink>
          <Button data-testid="navbar-enter-button" onClick={onLogout}>
            {t("exit")}
          </Button>
        </div>
      ) : (
        <>
          <Button data-testid="navbar-enter-button" onClick={onShowAuthModal}>
            {t("enter")}
          </Button>
          {isAuthModalOpen ? (
            <LoginModal isOpen={isAuthModalOpen} onClose={onCloseAuthModal} />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
});
