import { faCommentDots, faUser } from "@fortawesome/free-regular-svg-icons"
import { IMenuItem } from "./menu-item.interface"
import { faEllipsisH, faSignInAlt } from "@fortawesome/free-solid-svg-icons"

export const CHATS_MENU_ITEMS: IMenuItem[] = [
  {
    title: "Chats",
    path: "chats",
    icon: faCommentDots
  },
]

export const PROFILE_MENU_ITEMS: IMenuItem[] = [
  {
    title: "Profile",
    path: "profile",
    icon: faUser
  },
  {
    title: "Change password",
    path: "change-password",
    icon: faEllipsisH
  },
  {
    title: "Logout",
    template: "logout",
    icon: faSignInAlt,
  },
]