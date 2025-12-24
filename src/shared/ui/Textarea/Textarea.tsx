import React, {
  memo,
  TextareaHTMLAttributes,
  useLayoutEffect,
  useRef,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Textarea.module.scss";

type HTMLTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange"
>;

interface TextareaProps extends HTMLTextareaProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Textarea = memo(
  ({
    className,
    value,
    onChange,
    placeholder = "",
    ...otherProps
  }: TextareaProps) => {
    const ref = useRef<HTMLTextAreaElement | null>(null);

    useLayoutEffect(() => {
      if (!ref.current) return;

      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }, [value]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div
        data-testid="textarea-wrapper"
        className={classNames(cls.textareaWrapper, {}, [className])}
      >
        {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
        <textarea
          ref={ref}
          value={value}
          onChange={onChangeHandler}
          className={cls.textarea}
        ></textarea>
      </div>
    );
  }
);
