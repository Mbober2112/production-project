import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import cls from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      className={classNames(cls.loginModal, {}, [className])}
      isOpen={isOpen}
      lazy
      onClose={onClose}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
