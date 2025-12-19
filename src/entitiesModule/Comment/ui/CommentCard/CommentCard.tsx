import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import cls from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { Skeleton } from "shared/ui/Skeleton/Sceleton";

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment } = props;

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? (
          <Avatar size={AvatarSize.MEDIUM} src={comment.user.avatar} />
        ) : null}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
});
