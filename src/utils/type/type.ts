import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";

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
  date: number;
  message: string;
  phone: string;
  open: () => void;
  onClick?: (e:any) => void;
}

export interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: string;
  placeholder: string;
  destiny?: string;
}

export interface IHeaderPanel {
  avatar: string;
  icon: string;
  onClick?: (e:any) => void;
}

export interface IChat {
  data: Array<ILastMessage>;
  phone: string;
  onClick?: (e:any) => void;
}

export type TRequest = <T>(
  idInstance: string | null,
  apiTokenInstance: string | null,
  event: string,
  options?: RequestInit
  ) => Promise<T>;

export interface IModal {
  visible: boolean;
  closeModal: () => void;
}

export interface IMessage {
  text: string;
  time: number;
}

export interface ILastMessage {
  chatId: string;
  idMessage: string;
  senderId: string;
  senderName: string;
  textMessage: string;
  timestamp: number;
  type: string;
  typeMessage: string;
}