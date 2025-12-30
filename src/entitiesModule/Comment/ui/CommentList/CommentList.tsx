import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import cls from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";
import { Skeleton } from "shared/ui/Skeleton/Sceleton";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <div className={cls.commentList}>
          {new Array(3).fill(0).map((el, index) => (
            <div key={index} className={cls.skeletonWrapper}>
              <div className={cls.commentHeaderWrapper}>
                <Skeleton width={50} height={50} border={"20%"} />
                <Skeleton width={150} height={28} />
              </div>
              <Skeleton />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        ) : (
          <Text align={TextAlign.CENTER} text={t("noCommentsYet")} />
        )}
      </div>
    );
  }
);
