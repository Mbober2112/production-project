import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Countries } from "../model/types/country";
import { useTranslation } from "react-i18next";

interface CountrySelectProps {
  className?: string;
  value?: Countries;
  placeholder?: string;
  onChange?: (value: Countries) => void;
}

export const CountrySelect = memo(
  ({ className, placeholder, value, onChange }: CountrySelectProps) => {
    const { t } = useTranslation();
    const options = [
      { value: Countries.ENGLAND, content: t(Countries.ENGLAND) },
      { value: Countries.RUSSIA, content: t(Countries.RUSSIA) },
      { value: Countries.BELARUS, content: t(Countries.BELARUS) },
      { value: Countries.USA, content: t(Countries.USA) },
      { value: Countries.UKRAINE, content: t(Countries.UKRAINE) },
    ];
    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Countries);
      },
      [onChange]
    );

    return (
      <Select
        className={classNames("", {}, [className])}
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    );
  }
);
