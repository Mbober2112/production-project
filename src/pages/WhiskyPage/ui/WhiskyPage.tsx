import { WhiskyList } from "entitiesModule/Whisky/ui/WhiskyList/WhiskyList";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useItitialEffect";
import { Page } from "widgets/Page/Page";
import {
  getWhiskyPageError,
  getWhiskyPageIsLoading,
  getwhiskyPageView,
} from "../model/selectors/whiskyPageSelectors";
import { fetchNextWhiskyPage } from "../model/services/fetchNextWhiskyPage/fetchNextWhiskyPage";
import { initWhiskyPage } from "../model/services/initWhiskyPage/initWhiskyPage";
import { getWhisky, whiskyPageReducer } from "../model/slices/whiskyPageSlice";
import cls from "./WhiskyPage.module.scss";
import { WhiskyPageFilters } from "./WhiskyPageFilters/WhiskyPageFilters";

const reducers: ReducersList = {
  whiskyPage: whiskyPageReducer,
};

const WhiskyPage = () => {
  const dispatch = useAppDispatch();
  const whiskyList = useSelector(getWhisky.selectAll);
  const listView = useSelector(getwhiskyPageView);
  const isLoading = useSelector(getWhiskyPageIsLoading);
  const error = useSelector(getWhiskyPageError);

  useInitialEffect(() => {
    dispatch(initWhiskyPage());
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextWhiskyPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <WhiskyPageFilters />
        <WhiskyList
          whiskyList={whiskyList}
          isLoading={isLoading}
          viewType={listView}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default WhiskyPage;
