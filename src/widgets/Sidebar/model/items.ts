import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-page-icon.svg";
import MainIcon from "shared/assets/icons/home-page-icon.svg";
import WhiskyIcon from "shared/assets/icons/whisky-page-icon.svg";
import BooksIcon from "shared/assets/icons/books-page-icon.svg";
import GamesIcon from "shared/assets/icons/games-page-icon.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "main",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "about",
  },
  {
    path: RoutePath.whisky,
    Icon: WhiskyIcon,
    text: "whisky",
  },
  {
    path: RoutePath.books,
    Icon: BooksIcon,
    text: "books",
  },
  {
    path: RoutePath.games,
    Icon: GamesIcon,
    text: "games",
  },
];
