import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileEditCard.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { Input } from "shared/ui/Input/Input";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Loader } from "shared/ui/Loader/Loader";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { updateProfileData } from "entitiesModule/Profile/model/services/updateProfileData/updateProfileData";
import { Countries, CountrySelect } from "entitiesModule/Country";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ValidateProfileError } from "entitiesModule/Profile/model/types/profile";
import { DateInput } from "shared/ui/DateInput/DateInput";

interface ProfileEditCardProps {
  className?: string;
}

export const ProfileEditCard = memo(({ className }: ProfileEditCardProps) => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const profileForm = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const isError = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);
  const validateProfileTranslations = {
    [ValidateProfileError.INCORRECT_AVATAR_LINK]: t("incorrectAvatarLink"),
    [ValidateProfileError.INCORRECT_CITY]: t("incorrectCity"),
    [ValidateProfileError.INCORRECT_FIRSTNAME]: t("incorrectFirstname"),
    [ValidateProfileError.INCORRECT_LASTNAME]: t("incorrectLastname"),
    [ValidateProfileError.NO_DATA]: t("noProfileData"),
    [ValidateProfileError.SERVER_ERROR]: t("serverSaveError"),
  };

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileForm({ firstname: value }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileForm({ lastname: value }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileForm({ city: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfileForm({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Countries) => {
      dispatch(profileActions.updateProfileForm({ country }));
    },
    [dispatch]
  );

  const onChangeBirthday = useCallback(
    (value?: number) => {
      dispatch(profileActions.updateProfileForm({ dateOfBirth: value }));
    },
    [dispatch]
  );

  const onCancelChanges = useCallback(() => {
    dispatch(profileActions.cancelProfileForm());
  }, [dispatch]);

  const onSaveChanges = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileEditCard, {}, [className, cls.noData])}
      >
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={classNames(cls.profileEditCard, {}, [className, cls.noData])}
      >
        <Text
          title={t("fetchProfileDataError")}
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
  }

  return (
    <div className={classNames(cls.profileEditCard, {}, [className])}>
      {validateErrors?.length &&
        validateErrors.map((error) => (
          <Text
            text={validateProfileTranslations[error]}
            theme={TextTheme.ERROR}
          />
        ))}
      <div className={cls.field}>
        <Text bold text={`${t("name")}:`} />
        <Input
          className={cls.input}
          value={profileForm?.firstname}
          onChange={onChangeFirstname}
        />
      </div>
      <div className={cls.field}>
        <Text bold text={`${t("lastname")}:`} />
        <Input
          className={cls.input}
          value={profileForm?.lastname}
          onChange={onChangeLastname}
        />
      </div>
      <div className={cls.field}>
        <Text bold text={`${t("country")}:`} />
        <CountrySelect
          className={cls.input}
          value={profileForm?.country}
          onChange={onChangeCountry}
        />
      </div>
      <div className={cls.field}>
        <Text bold text={`${t("city")}:`} />
        <Input
          className={cls.input}
          value={profileForm?.city}
          onChange={onChangeCity}
        />
      </div>
      <div className={cls.field}>
        <Text bold text={`${t("avatar")}:`} />
        <Input
          className={cls.input}
          value={profileForm?.avatar}
          onChange={onChangeAvatar}
        />
      </div>
      <div className={cls.field}>
        <Text bold text={`${t("dateOfBirth")}:`} />
        <DateInput
          className={cls.input}
          value={profileForm?.dateOfBirth}
          onChange={onChangeBirthday}
        />
      </div>
      <div className={cls.buttonWrapper}>
        <Button className={cls.button} onClick={onCancelChanges}>
          {t("cancel")}
        </Button>
        <Button
          className={cls.button}
          theme={ButtonTheme.PRIMARY}
          onClick={onSaveChanges}
        >
          {t("save")}
        </Button>
      </div>
    </div>
  );
});
