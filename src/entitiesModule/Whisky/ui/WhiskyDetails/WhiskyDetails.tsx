import { classNames } from "shared/lib/classNames/classNames";
import cls from "./WhiskyDetails.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { whiskyDetailsReducer } from "../../model/slice/whiskyDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchWhiskyById } from "../../model/services/fetchWhiskyById/fetchWhiskyById";
import { useSelector } from "react-redux";
import {
  getWhiskyDetailsData,
  getWhiskyDetailsError,
  getWhiskyDetailsIsLoading,
} from "entitiesModule/Whisky/model/selectors/whiskyDetailsSelectors";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";

interface WhiskyDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  whiskyDetails: whiskyDetailsReducer,
};

export const WhiskyDetails = memo(({ className, id }: WhiskyDetailsProps) => {
  const { t } = useTranslation("whisky");
  const dispatch = useAppDispatch();
  const whiskyDetails = useSelector(getWhiskyDetailsData);
  const isLoading = useSelector(getWhiskyDetailsIsLoading);
  const isError = useSelector(getWhiskyDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchWhiskyById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div
        className={classNames(cls.whiskyDetails, {}, [className, cls.noData])}
      >
        <Loader />
      </div>
    );
  } else if (isError) {
    content = (
      <div
        className={classNames(cls.whiskyDetails, {}, [className, cls.noData])}
      >
        <Text
          title={t("fetchWhiskyDetailsError")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
        <Text
          text={t("tryToReloadPage")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  } else {
    content = (
      <div className={classNames(cls.whiskyDetails, {}, [className])}>
        <div>{whiskyDetails?.title}</div>
        <div>{whiskyDetails?.description}</div>
        <div>{whiskyDetails?.country}</div>
        <div>{whiskyDetails?.alc}</div>
        <div>{whiskyDetails?.type}</div>
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
