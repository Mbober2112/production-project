import { fetchProfileData, profileReducer } from "entitiesModule/Profile";
import { ProfileMainCard } from "entitiesModule/Profile/ui/ProfileMainCard/ProfileMainCard";
import { useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useItitialEffect";
import cls from "./ProfilePage.module.scss";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchProfileData());
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, {}, [className])}>
        <ProfilePageHeader canEdit />
        <ProfileMainCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
