import {FC, useState} from "react";
import './style.css';
import ChatPreview from "../../features/chatPreview/ChatPreview.tsx";
import {Chat} from "./Dashboard.tsx";

interface ChatListProps {
  chats: Chat[];
  onSelect: (value: string) => void;
}

const ChatList: FC<ChatListProps> = ({chats, onSelect}) => {
  const [activeChat, setActiveChat] = useState("");

  return (
    <div style={{
      height: '100%',
      width: '100%',
      overflowY: 'scroll'
    }}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10, padding: 10}}>
        {chats.map((chat, index) => (
          <ChatPreview key={index} active={activeChat === chat.username} title={chat.username}
                       onClick={() => {
                         console.log('click' + chat.username)
                         setActiveChat(chat.username);
                         onSelect(chat.username);
                       }}/>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
