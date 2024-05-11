import {useState, FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Popup from "../../features/popup/Popup.tsx";
import ChatList from "./ChatList.tsx";
import Chat from "./Chat.tsx";
import {isLogin} from "../../utils/userUtils.ts";

export interface User {
  username: string;
  jwt: string;
}

export interface Chat {
  username: string;
}

const Dashboard: FC = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState<Chat[]>([{username: 'kirill'}, {username: 'kirill2'}]);
  const [showPopup, setShowPopup] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  // const user: User = useMemo(() => {
  //     const username = localStorage.getItem('username');
  //     const jwt = localStorage.getItem('jwt');
  //     if (!username || !jwt) {
  //         navigate('/login');
  //         return {username: '', jwt: ''};
  //     }
  //     return {username, jwt};
  // }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('jwt');
    navigate('/login');
  };

  const addChat = () => {
    const newChat = {id: Math.random(), username: newUsername};  // `id` would normally be fetched or confirmed by the backend
    setChats([...chats, newChat]);
    setNewUsername("");
    setShowPopup(false);
  };

  useEffect(()=>{
    if (!isLogin()){
      navigate('/login')
    }
  });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      padding: 10,
      boxSizing: 'border-box'
    }}>
      <div style={{
        height: 40,
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        background: '#373737',
        borderRadius: 10,
        marginBottom: 10,
      }}>
        <button onClick={() => setShowPopup(true)}>Add Chat</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div style={{height: '100%', display: 'flex'}}>
        <div style={{
          height: '100%',
          width: '30%',
          background: '#373737',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
          <ChatList chats={chats}/>
        </div>
        <div style={{
          height: '100%',
          width: '70%',
          background: '#2b2b2b',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10
        }}>
          <Chat/>
        </div>
      </div>
      <Popup title="Add New Chat" isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <input type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)}
               placeholder="Enter username"/>
        <button onClick={addChat}>Add</button>
      </Popup>
    </div>
  );
};

export default Dashboard;
