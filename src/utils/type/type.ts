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

export interface IChat {
  title: string;
  date: string;
  message: string;
}

export interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}