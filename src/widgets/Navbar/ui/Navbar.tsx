import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useTranslation();

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div
      data-testid="navbar"
      className={classNames(cls.navbar, {}, [className])}
    >
      <ThemeSwitcher />
      <LangSwitcher />
      <Button data-testid="navbar-enter-button" onClick={onToggleAuthModal}>
        {t("enter")}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={onToggleAuthModal}>
        Модалка входа
      </Modal>
    </div>
  );
};
