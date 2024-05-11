import {FC} from "react";
import './style.css';

interface ChatPreviewProps {
    active?: boolean;
    title: string;
    message?: string;
    onClick: () => void;
}

const ChatPreview: FC<ChatPreviewProps> = ({active = false, title, message, onClick}) => {
    return (
        <div
            style={{
                height: 60,
                background: '#4e4e4e',
                border: active ? '1px solid #747bff' : '1px solid transparent',
                borderRadius: 6,
                padding: 10,
            }}
            onClick={onClick}
        >
            <div>{title}</div>
            <div>{message}</div>
        </div>
    );
};

export default ChatPreview;
