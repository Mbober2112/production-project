import { CommentList } from "entitiesModule/Comment/ui/CommentList/CommentList";
import { WhiskyDetails } from "entitiesModule/Whisky";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useItitialEffect";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { fetchCommentsByWhiskyId } from "../model/services/fetchCommentsByWhiskyId/fetchCommentsByWhiskyId";
import {
  getWhiskyComments,
  whiskyDetailsCommentsReducer,
} from "../model/slices/whiskyDetailsCommentSlice";
import cls from "./WhiskyDetailsPage.module.scss";

const reducers: ReducersList = {
  whiskyDetailsComments: whiskyDetailsCommentsReducer,
};

const WhiskyDetailsPage = () => {
  const { t } = useTranslation("whisky");
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getWhiskyComments.selectAll);

  useInitialEffect(() => dispatch(fetchCommentsByWhiskyId(id)));

  if (!id) {
    return <div>{t("whiskyNotFound")}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <WhiskyDetails id={id} />
      <Text
        align={TextAlign.CENTER}
        title={t("comments")}
        className={cls.commentsTitle}
      />
      <CommentList comments={comments} />
    </DynamicModuleLoader>
  );
};

export default WhiskyDetailsPage;
