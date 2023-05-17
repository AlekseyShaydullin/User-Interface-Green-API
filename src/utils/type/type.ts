import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  LabelHTMLAttributes,
} from "react";
import { RouteComponentProps } from "react-router-dom";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export interface IButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  modal?: boolean;
}

export interface IAvatar {
  avatar: string;
  size: string;
}

export interface IContact {
  title: string;
  date: string;
  message: string;
  phone: string;
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
  onClick?: (e:any) => void;
}

export interface IChat {
  onClick?: (e:any) => void;
}

export type TRequest = <T>(idInstance: string | null, apiTokenInstance: string | null, event: string, options?: RequestInit) => Promise<T>;

export interface ILocation {
  background: {
    pathname: string;
    search: string;
    hash: string;
    state: null;
    key: string;
  }
  from: string;
  state?: object;
};

export interface IModal {
  visible: boolean;
  closeModal: () => void;
}

export interface IModalOverlay {
  visible: boolean;
  closeModal: () => void;
}

export interface IModalAddContact {
  isActive: boolean;
  closeModal: () => void;
}