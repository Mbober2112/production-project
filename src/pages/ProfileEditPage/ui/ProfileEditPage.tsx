import { fetchProfileData, profileReducer } from "entitiesModule/Profile";
import { ProfileEditCard } from "entitiesModule/Profile/ui/ProfileEditCard/ProfileEditCard";
import { getUserAuthData } from "entitiesModule/User";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useItitialEffect";
import cls from "./ProfileEditPage.module.scss";
import ProfileEditPageHeader from "./ProfileEditPageHeader/ProfileEditPageHeader";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfileEditPageProps {
  className?: string;
}

const ProfileEditPage = ({ className }: ProfileEditPageProps) => {
  const user = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (user?.id) {
      dispatch(fetchProfileData(user.id));
    }
  });

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
