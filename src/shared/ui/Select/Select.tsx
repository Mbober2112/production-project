import React, { memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = memo(
  ({
    className,
    options,
    placeholder = "",
    value = "",
    onChange,
    ...otherProps
  }: SelectProps) => {
    const optionsList = useMemo(() => {
      return options.map((opt) => (
        <option className={cls.option} key={opt.value} value={opt.value}>
          {opt.content}
        </option>
      ));
    }, []);

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div
        data-testid="select-wrapper"
        className={classNames(cls.selectWrapper, {}, [className])}
      >
        {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
        <select className={cls.select} value={value} onChange={onChangeHandler}>
          {optionsList}
        </select>
      </div>
    );
  }
);
