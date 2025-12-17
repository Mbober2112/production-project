import { classNames } from "shared/lib/classNames/classNames";
import cls from "./GameDetails.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { gameDetailsReducer } from "entitiesModule/Games/model/slice/GameDetailsSlice";
import {
  getGameDetailsData,
  getGameDetailsError,
  getGameDetailsIsLoading,
} from "entitiesModule/Games/model/selectors/gameDetailsSelector";
import { fetchGameById } from "entitiesModule/Games/model/services/fetchGameById/fetchGameById";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useItitialEffect";

interface GameDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  gameDetails: gameDetailsReducer,
};

export const GameDetails = memo(({ className, id }: GameDetailsProps) => {
  const { t } = useTranslation("games");
  const dispatch = useAppDispatch();
  const gameDetails = useSelector(getGameDetailsData);
  const isLoading = useSelector(getGameDetailsIsLoading);
  const isError = useSelector(getGameDetailsError);

  useInitialEffect(() => {
    dispatch(fetchGameById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <div className={classNames(cls.gameDetails, {}, [className, cls.noData])}>
        <Loader />
      </div>
    );
  } else if (isError) {
    content = (
      <div className={classNames(cls.gameDetails, {}, [className, cls.noData])}>
        <Text
          title={t("fetchGameDetailsError")}
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
      <div className={classNames(cls.gameDetails, {}, [className])}>
        <div>{gameDetails?.title}</div>
        <div>{gameDetails?.description}</div>
        <div>{gameDetails?.country}</div>
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
