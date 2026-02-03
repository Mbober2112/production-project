import { WhiskySortField } from "entitiesModule/Whisky";
import {
  WhiskyCaskType,
  WhiskyType,
} from "entitiesModule/Whisky/model/types/whisky";
import { WhiskyCaskTypeTabs } from "entitiesModule/Whisky/ui/WhiskyCaskTypeTabs/WhiskyCaskTypeTabs";
import { WhiskySortSelector } from "entitiesModule/Whisky/ui/WhiskySortSelector/WhiskySortSelector";
import { WhiskyTypeTabs } from "entitiesModule/Whisky/ui/WhiskyTypeTabs/WhiskyTypeTabs";
import {
  getwhiskyPageCaskType,
  getwhiskyPageOrder,
  getwhiskyPageSearch,
  getwhiskyPageSort,
  getwhiskyPageType,
  getwhiskyPageView,
} from "pages/WhiskyPage/model/selectors/whiskyPageSelectors";
import { fetchWhiskyList } from "pages/WhiskyPage/model/services/fetchWhiskyList/fetchWhiskyList";
import { whiskyPageActions } from "pages/WhiskyPage/model/slices/whiskyPageSlice";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ListViewType, SortOrder } from "shared/const/common";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { Input } from "shared/ui/Input/Input";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
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
    const selectedType = useSelector(getwhiskyPageType);
    const selectedCaskType = useSelector(getwhiskyPageCaskType);

    const fetchData = useCallback(() => {
      dispatch(fetchWhiskyList({ page: 1, replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 800);

    const listViewChange = useCallback(
      (view: ListViewType) => {
        dispatch(whiskyPageActions.setView(view));
      },
      [dispatch],
    );

    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(whiskyPageActions.setPage(1));
        dispatch(whiskyPageActions.setOrder(newOrder));
        fetchData();
      },
      [dispatch],
    );

    const onChangeSort = useCallback(
      (newSort: WhiskySortField) => {
        dispatch(whiskyPageActions.setPage(1));
        dispatch(whiskyPageActions.setSort(newSort));
        fetchData();
      },
      [dispatch],
    );

    const onChangeSearch = useCallback(
      (newSearch: string) => {
        dispatch(whiskyPageActions.setPage(1));
        dispatch(whiskyPageActions.setSearch(newSearch));
        debouncedFetchData();
      },
      [dispatch],
    );

    const onSelectWhiskyType = useCallback(
      (type: WhiskyType) => {
        dispatch(whiskyPageActions.setPage(1));
        dispatch(whiskyPageActions.setType(type));
        fetchData();
      },
      [dispatch],
    );

    const onSelectWhiskyCaskType = useCallback(
      (type: WhiskyCaskType) => {
        dispatch(whiskyPageActions.setPage(1));
        dispatch(whiskyPageActions.setCaskType(type));
        fetchData();
      },
      [dispatch],
    );

    return (
      <div className={classNames(cls.whiskyPageFilters, {}, [className])}>
        <Input
          placeholder={t("search")}
          value={searchText}
          canClear
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
        <WhiskyTypeTabs
          selectedType={selectedType}
          onSelectType={onSelectWhiskyType}
        />
        <WhiskyCaskTypeTabs
          selectedType={selectedCaskType}
          onSelectType={onSelectWhiskyCaskType}
        />
      </div>
    );
  },
);
