import React, { InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  canClear?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder = "",
    canClear = false,
    ...otherProps
  }: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div
        data-testid="input-wrapper"
        className={classNames(cls.inputWrapper, {}, [className])}
      >
        {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
        ></input>
        {value && canClear && (
          <button className={cls.clearBtn} onClick={() => onChange?.("")}>
            ✕
          </button>
        )}
      </div>
    );
  },
);
