import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string
}

export interface IAvatar {
  avatar: string
}