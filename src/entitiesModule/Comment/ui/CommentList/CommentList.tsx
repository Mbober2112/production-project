import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import cls from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
}

export const CommentList = memo(({ className, comments }: CommentListProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => <CommentCard comment={comment} />)
      ) : (
        <Text align={TextAlign.CENTER} text={t("noComments")} />
      )}
    </div>
  );
});
