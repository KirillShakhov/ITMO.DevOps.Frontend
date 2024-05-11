import {FC, useState} from "react";
import './style.css';
import ChatPreview from "../../features/chatPreview/ChatPreview.tsx";
import {Chat} from "./Dashboard.tsx";

interface ChatListProps {
  chats: Chat[];
  activeChat: string;
  setActiveChat: (value: string) => void;
  onDelete: (value: string) => void;
}

const ChatList: FC<ChatListProps> = ({chats, activeChat, setActiveChat, onDelete}) => {

  return (
    <div style={{
      height: '100%',
      width: '100%',
      overflowY: 'scroll'
    }}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10, padding: 10}}>
        {chats.map((chat, index) => (
          <ChatPreview
            key={index}
            active={activeChat === chat.username}
            title={chat.username}
            onClick={() => {
              setActiveChat(chat.username);
            }}
            onDelete={() => {
              if (activeChat === chat.username) setActiveChat('');
              onDelete(chat.username);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
