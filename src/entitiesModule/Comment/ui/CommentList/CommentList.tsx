import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import cls from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  ({ className, isLoading, comments }: CommentListProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => <div>{comment.text}</div>)
        ) : (
          <Text text={t("Комментарии отсутствуют")} />
        )}
      </div>
    );
  }
);
