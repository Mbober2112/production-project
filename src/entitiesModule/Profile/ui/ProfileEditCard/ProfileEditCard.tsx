import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileEditCard.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { Input } from "shared/ui/Input/Input";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { SexTypes, ValidateProfileError } from "../../model/types/profile";
import { DateInput } from "shared/ui/DateInput/DateInput";
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileValidateErrors,
} from "../../model/selectors/profileSelectors";
import { Select } from "shared/ui/Select/Select";
import { Skeleton } from "shared/ui/Skeleton/Sceleton";
import { Countries, CountrySelect } from "entitiesModule/Country";

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

  const onChangeSex = useCallback(
    (sex: string) => {
      dispatch(profileActions.updateProfileForm({ sex: sex as SexTypes }));
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
    if (profileForm?.id) {
      dispatch(updateProfileData(profileForm?.id));
    }
  }, [dispatch, profileForm]);

  if (isLoading) {
    return (
      <div className={classNames(cls.profileEditCard, {}, [className])}>
        <div className={cls.fieldsWrapper}>
          <Skeleton className={cls.fieldsSkeleton} />
          <Skeleton className={cls.fieldsSkeleton} />
          <Skeleton className={cls.fieldsSkeleton} />
          <Skeleton className={cls.fieldsSkeleton} />
          <Skeleton className={cls.fieldsSkeleton} />
          <Skeleton className={cls.fieldsSkeleton} />
          <Skeleton className={cls.fieldsSkeleton} />
        </div>
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
      <div className={cls.fieldsWrapper}>
        <div className={cls.field}>
          <Input
            className={cls.input}
            placeholder={t("name")}
            value={profileForm?.firstname}
            onChange={onChangeFirstname}
          />
        </div>
        <div className={cls.field}>
          <Input
            className={cls.input}
            placeholder={t("lastname")}
            value={profileForm?.lastname}
            onChange={onChangeLastname}
          />
        </div>
        <div className={cls.field}>
          <CountrySelect
            className={cls.input}
            placeholder={t("country")}
            value={profileForm?.country}
            onChange={onChangeCountry}
          />
        </div>
        <div className={cls.field}>
          <Input
            className={cls.input}
            placeholder={t("city")}
            value={profileForm?.city}
            onChange={onChangeCity}
          />
        </div>
        <div className={cls.field}>
          <Input
            className={cls.input}
            placeholder={t("avatar")}
            value={profileForm?.avatar}
            onChange={onChangeAvatar}
          />
        </div>
        <div className={cls.field}>
          <Select
            className={cls.input}
            placeholder={t("sex")}
            value={profileForm?.sex}
            options={[
              { value: SexTypes.MALE, content: t(SexTypes.MALE) },
              { value: SexTypes.FEMALE, content: t(SexTypes.FEMALE) },
            ]}
            onChange={onChangeSex}
          />
        </div>
        <div className={cls.field}>
          <DateInput
            className={cls.input}
            placeholder={t("dateOfBirth")}
            value={profileForm?.dateOfBirth}
            onChange={onChangeBirthday}
          />
        </div>
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
