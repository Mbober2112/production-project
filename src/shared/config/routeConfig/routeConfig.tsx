import { AboutPage } from "pages/AboutPage";
import { BookDetailsPage } from "pages/BookDetailsPage";
import { BooksPage } from "pages/BooksPage";
import { GameDetailsPage } from "pages/GameDetailsPage";
import { GamesPage } from "pages/GamesPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfileEditPage } from "pages/ProfileEditPage";
import { ProfilePage } from "pages/ProfilePage";
import { WhiskyDetailsPage } from "pages/WhiskyDetailsPage";
import { WhiskyPage } from "pages/WhiskyPage";
import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & { authOnly?: boolean };

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  WHISKY = "whisky",
  WHISKY_DETAILS = "whisky_details",
  GAMES = "games",
  GAME_DETAILS = "game_details",
  BOOKS = "books",
  BOOK_DETAILS = "book_details",
  PROFILE_EDIT = "profile_edit",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile/", //+id
  [AppRoutes.PROFILE_EDIT]: "/profileEdit",
  [AppRoutes.WHISKY]: "/whisky",
  [AppRoutes.WHISKY_DETAILS]: "/whisky/", //+id
  [AppRoutes.GAMES]: "/games",
  [AppRoutes.GAME_DETAILS]: "/games/", //+id
  [AppRoutes.BOOKS]: "/books",
  [AppRoutes.BOOK_DETAILS]: "/books/", //+id
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.PROFILE_EDIT]: {
    path: RoutePath.profile_edit,
    element: <ProfileEditPage />,
    authOnly: true,
  },
  [AppRoutes.WHISKY]: {
    path: RoutePath.whisky,
    element: <WhiskyPage />,
    authOnly: true,
  },
  [AppRoutes.WHISKY_DETAILS]: {
    path: `${RoutePath.whisky_details}:id`,
    element: <WhiskyDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.GAMES]: {
    path: RoutePath.games,
    element: <GamesPage />,
    authOnly: true,
  },
  [AppRoutes.GAME_DETAILS]: {
    path: `${RoutePath.game_details}:id`,
    element: <GameDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.BOOKS]: {
    path: RoutePath.books,
    element: <BooksPage />,
    authOnly: true,
  },
  [AppRoutes.BOOK_DETAILS]: {
    path: `${RoutePath.book_details}:id`,
    element: <BookDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
