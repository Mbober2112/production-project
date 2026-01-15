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
import { ListViewSwitcher } from "widgets/ListViewSwitcher";
import {
  getWhiskyPageError,
  getWhiskyPageIsLoading,
  getwhiskyPageView,
} from "../model/selectors/whiskyPageSelectors";
import { fetchWhiskyList } from "../model/services/fetchWhiskyList/fetchWhiskyList";
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
  const error = useSelector(getWhiskyPageError);

  useInitialEffect(() => {
    dispatch(fetchWhiskyList());
    dispatch(whiskyPageActions.initState());
  });

  const listViewChange = useCallback(
    (view: ListViewType) => {
      dispatch(whiskyPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ListViewSwitcher onViewChange={listViewChange} view={listView} />
      <WhiskyList
        whiskyList={whiskyList}
        isLoading={isLoading}
        viewType={listView}
      />
    </DynamicModuleLoader>
  );
};

export default WhiskyPage;
