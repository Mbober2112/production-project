import { WhiskyList } from "entitiesModule/Whisky/ui/WhiskyList/WhiskyList";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useItitialEffect";
import {
  getWhiskyPageError,
  getWhiskyPageIsLoading,
  getwhiskyPageView,
} from "../model/selectors/whiskyPageSelectors";
import { fetchWhiskyList } from "../model/services/fetchWhiskyList/fetchWhiskyList";
import { getWhisky, whiskyPageReducer } from "../model/slices/whiskyPageSlice";
import cls from "./WhiskyPage.module.scss";

const reducers: ReducersList = {
  whiskyPage: whiskyPageReducer,
};

const WhiskyPage = () => {
  const { t } = useTranslation("whisky");
  const dispatch = useAppDispatch();
  const whiskyList = useSelector(getWhisky.selectAll);
  const listView = useSelector(getwhiskyPageView);
  const isLoading = useSelector(getWhiskyPageIsLoading);
  const error = useSelector(getWhiskyPageError);

  useInitialEffect(() => dispatch(fetchWhiskyList()));

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <WhiskyList
        whiskyList={whiskyList}
        isLoading={isLoading}
        viewType={listView}
      />
    </DynamicModuleLoader>
  );
};

export default WhiskyPage;
