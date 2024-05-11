import axios from 'axios';
import {API_URL} from "./url.ts";


export interface MessageResponse {
  data: MessageModel[]
}

export interface MessageModel{
  id: string;
  username: string;
  recipient: string;
  text: string;
  attachment?: number;
  createdDate: Date;
}

function getMessages(): Promise<MessageResponse> {
  const jwt = localStorage.getItem('jwt');
  if (jwt == null) return new Promise(() => {
    return null
  });
  const headers = {
    Authorization: `Bearer ${jwt}`
  };
  return axios.get(`${API_URL}/messages/`, { headers });
}

function sendMessage(text: string, recipient: string): Promise<void> {
  const jwt = localStorage.getItem('jwt');
  if (jwt == null) return new Promise(() => {
    return null
  });
  const headers = {
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json'
  };
  const data = {
    "text": text,
    "recipient": recipient
  }
  return axios.post(`${API_URL}/messages/`, data, { headers });
}

export {getMessages, sendMessage};
