import { WhiskyList } from "entitiesModule/Whisky/ui/WhiskyList/WhiskyList";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ListViewType } from "shared/const/common";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useItitialEffect";
import { Page } from "shared/ui/Page/Page";
import { ListViewSwitcher } from "widgets/ListViewSwitcher";
import {
  getWhiskyPageError,
  getwhiskyPageHasMore,
  getwhiskyPageInited,
  getWhiskyPageIsLoading,
  getwhiskyPageNum,
  getwhiskyPageView,
} from "../model/selectors/whiskyPageSelectors";
import { fetchNextWhiskyPage } from "../model/services/fetchNextWhiskyPage/fetchNextWhiskyPage";
import { fetchWhiskyList } from "../model/services/fetchWhiskyList/fetchWhiskyList";
import { initWhiskyPage } from "../model/services/initWhiskyPage/initWhiskyPage";
import {
  getWhisky,
  whiskyPageActions,
  whiskyPageReducer,
} from "../model/slices/whiskyPageSlice";
import cls from "./WhiskyPage.module.scss";

const reducers: ReducersList = {
  whiskyPage: whiskyPageReducer,
};

const WhiskyPage = () => {
  const dispatch = useAppDispatch();
  const whiskyList = useSelector(getWhisky.selectAll);
  const listView = useSelector(getwhiskyPageView);
  const isLoading = useSelector(getWhiskyPageIsLoading);
  const inited = useSelector(getwhiskyPageInited);
  const error = useSelector(getWhiskyPageError);

  useInitialEffect(() => {
    dispatch(initWhiskyPage());
  });

  const listViewChange = useCallback(
    (view: ListViewType) => {
      dispatch(whiskyPageActions.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextWhiskyPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <ListViewSwitcher onViewChange={listViewChange} view={listView} />
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
