import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import cls from "./AddCommentForm.module.scss";
import { Textarea } from "shared/ui/Textarea/Textarea";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { getUserAuthData } from "entitiesModule/User";
import { Skeleton } from "shared/ui/Skeleton/Sceleton";

export interface AddCommentFormProps {
  className?: string;
  isLoading?: boolean;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
  ({ className, isLoading, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const user = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch]
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text || "");
      onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    if (isLoading) {
      return (
        <div className={classNames(cls.addCommentForm, {}, [className])}>
          <Skeleton
            width={50}
            height={50}
            border={"20%"}
            className={cls.avatarSkeleton}
          />
          <Skeleton className={cls.textarea} />
          <Skeleton width={100} height={28} />
        </div>
      );
    }

    return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(cls.addCommentForm, {}, [className])}>
          <Avatar src={user?.avatar} size={AvatarSize.SMALL} />
          <Textarea
            className={cls.textarea}
            placeholder={t("enterComment")}
            value={text}
            onChange={onCommentTextChange}
          />
          <Button onClick={onSendHandler}>{t("send")}</Button>
        </div>
      </DynamicModuleLoader>
    );
  }
);

export default AddCommentForm;
