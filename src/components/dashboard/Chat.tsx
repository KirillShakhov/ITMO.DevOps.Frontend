import {FC, useEffect, useRef, useState} from "react";
import './style.css';
import Message from "./Message.tsx";


const Chat: FC = () => {
  const [message, setMessage] = useState<string>('');
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

  const onSend = () => {

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
        {Array.from({ length: 30 }, (_, i) => (
          <Message self={i % 3 == 0 } />
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
