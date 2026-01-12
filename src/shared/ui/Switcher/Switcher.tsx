import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Switcher.module.scss";

interface SwitcherProps {
  className?: string;
  checked: boolean;
  onChange: () => void;
  label?: string;
}

export const Switcher = memo(
  ({ className, label, checked, onChange }: SwitcherProps) => {
    return (
      <label className={classNames(cls.switcher, {}, [className])}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={cls.slider} />
        {label && <span className={cls.label}>{label}</span>}
      </label>
    );
  }
);
