import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Countries } from "../model/types/country";
import i18n from "shared/config/i18n/i18n";

interface CountrySelectProps {
  className?: string;
  value?: Countries;
  placeholder?: string;
  onChange?: (value: Countries) => void;
}

const options = [
  { value: Countries.ENGLAND, content: i18n.t(Countries.ENGLAND) },
  { value: Countries.RUSSIA, content: i18n.t(Countries.RUSSIA) },
  { value: Countries.BELARUS, content: i18n.t(Countries.BELARUS) },
  { value: Countries.USA, content: i18n.t(Countries.USA) },
  { value: Countries.UKRAINE, content: i18n.t(Countries.UKRAINE) },
];

export const CountrySelect = memo(
  ({ className, placeholder, value, onChange }: CountrySelectProps) => {
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
