import {FC, useCallback, useEffect, useRef, useState} from "react";
import './style.css';
import Message from "./Message.tsx";
import {getMessages, MessageModel, sendMessage} from "../../services/messageService.ts";

interface ChatProps{
  recipient: string;
}

const Chat: FC<ChatProps> = ({recipient}) => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageModel[]>();
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const scrollHeight = messageContainerRef.current?.scrollHeight;
    const height = messageContainerRef.current?.clientHeight;
    if (scrollHeight && height) {
      messageContainerRef.current.scrollTop = scrollHeight - height;
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, []);

  const updateMessage = useCallback(() => {
    if (recipient === '') {
      setMessages([]);
      return;
    }
    getMessages().then(data=>{
      setMessages(data.data);
    }).catch(err => {
      console.log(err);
    });
  }, [recipient]);

  useEffect(() => {
    updateMessage();
  }, [recipient, updateMessage]);

  const onSend = async () => {
    await sendMessage(message, 'kirill1');
    updateMessage();
  }

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div
        ref={messageContainerRef}
        style={{
          flex: 0.9,
          overflowY: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          padding: 10,
        }}
      >
        {messages?.map((messageModel) => (
          <Message key={messageModel.id} self={messageModel.username !== recipient} text={messageModel.text} />
        ))}
      </div>
      <div
        style={{
          height: 70,
          display: 'flex',
          gap: 5,
          padding: 10,
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Text"
          required
          style={{width: '100%'}}
        />
        <button onClick={onSend}>&gt;</button>
      </div>
    </div>
  );
};

export default Chat;
