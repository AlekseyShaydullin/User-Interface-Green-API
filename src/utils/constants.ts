export const apiUrl: string = 'https://api.green-api.com';
export const eventStateInstance: string = 'getStateInstance';
export const eventSendMessage: string = 'sendMessage';
export const eventGetNotification: string = 'receiveNotification';
export const eventDeleteNotification: string = 'deleteNotification';
export const eventGetChatHistory: string = 'getChatHistory';
export const modalContainer = document.getElementById('modal-root') as HTMLElement;
export const body = document.querySelector('body') as HTMLElement;
export const idInstance = localStorage.getItem('idInstance');
export const apiTokenInstance = localStorage.getItem('apiTokenInstance');
