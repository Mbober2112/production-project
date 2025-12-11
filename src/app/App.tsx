import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import AppRouter from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { getUserMounted, userActions } from "entitiesModule/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";

export const App = () => {
  const dispatch = useAppDispatch();
  const userMounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {userMounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
