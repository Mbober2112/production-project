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
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Sceleton";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useItitialEffect";

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

  useInitialEffect(() => {
    dispatch(fetchWhiskyById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <div className={classNames(cls.whiskyDetails, {}, [className])}>
        <div className={cls.mainInfoWrapper}>
          <Skeleton width={250} height={250} border={"20%"} />
          <div className={cls.mainInfo}>
            <Skeleton height={32} width={350} />
            <div className={cls.info}>
              <Skeleton width={200} height={24} />
            </div>
            <div className={cls.info}>
              <Skeleton width={200} height={24} />
            </div>
            <div className={cls.info}>
              <Skeleton width={200} height={24} />
            </div>
            <div className={cls.info}>
              <Skeleton width={200} height={24} />
            </div>
            <div className={cls.info}>
              <Skeleton width={200} height={24} />
            </div>
            <div className={cls.info}>
              <Skeleton width={200} height={24} />
            </div>
          </div>
        </div>
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
        <div className={cls.mainInfoWrapper}>
          <Avatar src={whiskyDetails?.img} size={AvatarSize.LARGE} />
          <div className={cls.mainInfo}>
            <Text title={whiskyDetails?.title} />
            <div className={cls.info}>
              <Text small opacity text={`${t("country")}:`} />
              <Text text={t(whiskyDetails?.country || "")} />
            </div>
            <div className={cls.info}>
              <Text small opacity text={`${t("strength")}:`} />
              <Text text={`${String(whiskyDetails?.alc)}%`} />
            </div>
            <div className={cls.info}>
              <Text small opacity text={`${t("category")}:`} />
              <Text text={whiskyDetails?.type} />
            </div>
            <div className={cls.info}>
              <Text small opacity text={`${t("bottler")}:`} />
              <Text text={whiskyDetails?.bottler} />
            </div>
            <div className={cls.info}>
              <Text small opacity text={`${t("distillery")}:`} />
              <Text text={whiskyDetails?.distillery} />
            </div>
            <div className={cls.info}>
              <Text small opacity text={`${t("statedAge")}:`} />
              <Text text={String(whiskyDetails?.statedAge)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
