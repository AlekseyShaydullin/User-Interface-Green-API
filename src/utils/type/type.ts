import { ButtonHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export interface IButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

export interface IAvatar {
  avatar: string;
  size: string;
}

export interface IContact {
  title: string;
  date: string;
  message: string;
  onClick?: (e:any) => void;
}

export interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

export interface IHeaderPanel {
  avatar: string;
  icon: string;
}