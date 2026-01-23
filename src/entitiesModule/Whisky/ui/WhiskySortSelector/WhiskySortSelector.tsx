import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import cls from "./WhiskySortSelector.module.scss";
import { SortOrder } from "shared/const/common";
import { WhiskySortField } from "../../model/types/whisky";

interface WhiskySortSelectorProps {
  className?: string;
  sort: WhiskySortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: WhiskySortField) => void;
}

export const WhiskySortSelector = memo(
  ({
    className,
    onChangeOrder,
    onChangeSort,
    order,
    sort,
  }: WhiskySortSelectorProps) => {
    const { t } = useTranslation("whisky");

    const orderOptions = useMemo<SelectOption[]>(
      () => [
        {
          value: "asc",
          content: t("ascending"),
        },
        {
          value: "desc",
          content: t("descending"),
        },
      ],
      [t]
    );

    const sortFieldOptions = useMemo<SelectOption[]>(
      () => [
        {
          value: WhiskySortField.RATES,
          content: t("byRates"),
        },
        {
          value: WhiskySortField.TITLE,
          content: t("byName"),
        },
        {
          value: WhiskySortField.RAITING,
          content: t("byRaiting"),
        },
      ],
      [t]
    );

    const changeSortHandler = useCallback(
      (newSort: string) => {
        onChangeSort(newSort as WhiskySortField);
      },
      [onChangeSort]
    );

    const changeOrderHandler = useCallback(
      (newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
      },
      [onChangeOrder]
    );

    return (
      <div className={classNames(cls.whiskySortSelector, {}, [className])}>
        <Select
          options={sortFieldOptions}
          placeholder={t("sortBy")}
          value={sort}
          onChange={changeSortHandler}
        />
        <Select
          options={orderOptions}
          placeholder={t("by")}
          value={order}
          onChange={changeOrderHandler}
          className={cls.order}
        />
      </div>
    );
  }
);
