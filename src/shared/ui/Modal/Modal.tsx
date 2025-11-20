import React, { FC, useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "shared/ui/Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen: boolean;
  lazy?: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  lazy,
  onClose,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        data-testid="modal"
        className={classNames(cls.modal, { [cls.opened]: isOpen }, [className])}
      >
        <div className={classNames(cls.overlay)} onClick={onClose}>
          <div className={classNames(cls.content)} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
