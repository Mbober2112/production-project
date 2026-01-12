import { fetchProfileData, profileReducer } from "entitiesModule/Profile";
import { ProfileMainCard } from "entitiesModule/Profile/ui/ProfileMainCard/ProfileMainCard";
import { getUserAuthData } from "entitiesModule/User";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useItitialEffect";
import cls from "./ProfilePage.module.scss";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import ProfilePageSettings from "./ProfilePageSettings/ProfilePageSettings";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const user = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, {}, [className])}>
        <ProfilePageHeader canEdit={id === user?.id} />
        <ProfileMainCard />
        {id === user?.id ? <ProfilePageSettings /> : <></>}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
