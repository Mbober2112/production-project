import { WhiskySortField } from "entitiesModule/Whisky";
import { WhiskySortSelector } from "entitiesModule/Whisky/ui/WhiskySortSelector/WhiskySortSelector";
import {
  getwhiskyPageOrder,
  getwhiskyPageSearch,
  getwhiskyPageSort,
  getwhiskyPageView,
} from "pages/WhiskyPage/model/selectors/whiskyPageSelectors";
import { fetchWhiskyList } from "pages/WhiskyPage/model/services/fetchWhiskyList/fetchWhiskyList";
import { whiskyPageActions } from "pages/WhiskyPage/model/slices/whiskyPageSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ListViewType, SortOrder } from "shared/const/common";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { Input } from "shared/ui/Input/Input";
import { ListViewSwitcher } from "widgets/ListViewSwitcher";
import cls from "./WhiskyPageFilters.module.scss";

interface WhiskyPageFiltersProps {
  className?: string;
}

export const WhiskyPageFilters = memo(
  ({ className }: WhiskyPageFiltersProps) => {
    const { t } = useTranslation("whisky");
    const dispatch = useAppDispatch();
    const listView = useSelector(getwhiskyPageView);
    const sort = useSelector(getwhiskyPageSort);
    const sortOrder = useSelector(getwhiskyPageOrder);
    const searchText = useSelector(getwhiskyPageSearch);

    const fetchData = useCallback(() => {
      dispatch(fetchWhiskyList({ page: 1, replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 800);

    const listViewChange = useCallback(
      (view: ListViewType) => {
        dispatch(whiskyPageActions.setView(view));
      },
      [dispatch]
    );

    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(whiskyPageActions.setPage(1));
        dispatch(whiskyPageActions.setOrder(newOrder));
        fetchData();
      },
      [dispatch]
    );

    const onChangeSort = useCallback(
      (newSort: WhiskySortField) => {
        dispatch(whiskyPageActions.setPage(1));
        dispatch(whiskyPageActions.setSort(newSort));
        fetchData();
      },
      [dispatch]
    );

    const onChangeSearch = useCallback(
      (newSearch: string) => {
        dispatch(whiskyPageActions.setPage(1));
        dispatch(whiskyPageActions.setSearch(newSearch));
        debouncedFetchData();
      },
      [dispatch]
    );

    return (
      <div className={classNames(cls.whiskyPageFilters, {}, [className])}>
        <Input
          placeholder={t("search")}
          value={searchText}
          onChange={onChangeSearch}
        />
        <div className={cls.sortWrapper}>
          <WhiskySortSelector
            sort={sort}
            order={sortOrder}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ListViewSwitcher onViewChange={listViewChange} view={listView} />
        </div>
      </div>
    );
  }
);
