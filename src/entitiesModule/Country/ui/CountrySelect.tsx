import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Countries } from "../model/types/country";

interface CountrySelectProps {
  className?: string;
  value?: Countries;
  onChange?: (value: Countries) => void;
}

const options = [
  { value: Countries.England, content: Countries.England },
  { value: Countries.Russia, content: Countries.Russia },
  { value: Countries.Belarus, content: Countries.Belarus },
  { value: Countries.USA, content: Countries.USA },
  { value: Countries.Ukraine, content: Countries.Ukraine },
];

export const CountrySelect = memo(
  ({ className, value, onChange }: CountrySelectProps) => {
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
        value={value}
        onChange={onChangeHandler}
      />
    );
  }
);
