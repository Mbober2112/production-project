import React, { InputHTMLAttributes, memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./DateInput.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface DateInputProps extends HTMLInputProps {
  className?: string;
  value?: number;
  onChange?: (value: number) => void;
}

export const DateInput = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder = "",
    ...otherProps
  }: DateInputProps) => {
    const formattedDateForInput = value
      ? new Date(value).toISOString().slice(0, 10)
      : "";

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const dateString = e.target.value;

      if (dateString) {
        const dateObject = new Date(dateString);
        onChange?.(dateObject.getTime());
      }
    };

    return (
      <div
        data-testid="input-wrapper"
        className={classNames(cls.inputWrapper, {}, [className])}
      >
        {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
        <input
          type="date"
          data-testid="date-input"
          value={formattedDateForInput}
          onChange={onChangeHandler}
          className={cls.input}
        ></input>
      </div>
    );
  }
);
