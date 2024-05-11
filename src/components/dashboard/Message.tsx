import {FC} from "react";
import './style.css';
import moment from 'moment'

interface MessageProps {
  self: boolean,
  text: string,
  createDate: Date,
}

const Message: FC<MessageProps> = ({self, text, createDate}) => {
  const formattedDate = (moment(createDate)).format('HH:mm:ss DD.MM.YYYY')

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: self ? 'end' : 'start'
    }}>
      <div
        style={{
          padding: 10,
          background: '#2b2d30',
          borderRadius: 16,
          borderBottomRightRadius: self ? 0 : 16,
          borderBottomLeftRadius: self ? 16 : 0,
        }}
      >
        <div
          style={{
            maxWidth: 400,
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {text}
        </div>
        <div
          style={{
            height: '100%',
            textAlign: self ? 'end' : 'start',
            color: 'rgba(255,255,255,0.4)'
          }}
        >
          {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default Message;
