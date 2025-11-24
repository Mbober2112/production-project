import { getUserAuthData, userActions } from "entitiesModule/User";
import { LoginModal } from "features/AuthByUsername";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
        <Button data-testid="navbar-enter-button" onClick={onLogout}>
          {t("exit")}
        </Button>
      ) : (
        <>
          <Button data-testid="navbar-enter-button" onClick={onShowAuthModal}>
            {t("enter")}
          </Button>
          <LoginModal isOpen={isAuthModalOpen} onClose={onCloseAuthModal} />
        </>
      )}
    </div>
  );
};
