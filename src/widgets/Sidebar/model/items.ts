import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-page-icon.svg";
import MainIcon from "shared/assets/icons/home-page-icon.svg";

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
];
