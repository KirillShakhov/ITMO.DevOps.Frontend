import {FC, useState} from "react";
import './style.css';


const Chat: FC = () => {
    const [message, setMessage] = useState<string>('');

    const onSend = () => {

    }

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div>

            </div>
            <div
                style={{
                    height: 70,
                    boxSizing: 'border-box',
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
