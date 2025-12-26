import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import cls from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import { getTimeAgo } from "shared/lib/getTimeAgo/getTimeAgo";

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment } = props;
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        <AppLink
          to={`${RoutePath.profile}${comment.user.id}`}
          className={cls.link}
        >
          {comment.user.avatar ? (
            <Avatar size={AvatarSize.MEDIUM} src={comment.user.avatar} />
          ) : null}
          <Text title={comment.user.username} />
        </AppLink>
        <Text
          small
          opacity
          className={cls.date}
          text={getTimeAgo(comment.createdAt, i18n.language)}
        />
      </div>
      <Text text={comment.text} />
    </div>
  );
});
