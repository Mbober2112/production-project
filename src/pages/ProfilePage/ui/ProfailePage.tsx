import { profileReducer } from "entitiesModule/Profile";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import cls from "./ProfilePage.module.scss";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, {}, [className])}></div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
