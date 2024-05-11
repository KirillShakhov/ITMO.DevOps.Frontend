import {FC} from "react";
import './style.css';

interface ChatPreviewProps {
  active?: boolean;
  title: string;
  message?: string;
  onClick: () => void;
  onDelete: () => void;
}

const ChatPreview: FC<ChatPreviewProps> = ({active = false, title, onClick, onDelete}) => {
  return (
    <div
      style={{
        height: 50,
        background: '#4e4e4e',
        border: active ? '1px solid #747bff' : '1px solid transparent',
        borderRadius: 6,
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
      }}
      onClick={onClick}
    >
      <div
        style={{
          fontSize: 24,
        }}
      >
        {title}
      </div>
      <button
        style={{
          width: 50,
          height: 50
        }}
        onClick={onDelete}
      >
        X
      </button>
    </div>
  );
};

export default ChatPreview;
