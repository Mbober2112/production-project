import { fetchProfileData, profileReducer } from "entitiesModule/Profile";
import { ProfileEditCard } from "entitiesModule/Profile/ui/ProfileEditCard/ProfileEditCard";
import { useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./ProfileEditPage.module.scss";
import ProfileEditPageHeader from "./ProfileEditPageHeader/ProfileEditPageHeader";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfileEditPageProps {
  className?: string;
}

const ProfileEditPage = ({ className }: ProfileEditPageProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.profileEditPage, {}, [className])}>
        <ProfileEditPageHeader />
        <ProfileEditCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfileEditPage;
