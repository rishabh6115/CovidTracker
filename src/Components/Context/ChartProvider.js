import { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";

const ChatContext = createContext();

const ChatProvider = (props) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (user) {
      history.push("/");
    }
  }, [history]);

  return (
    <ChatContext.Provider
      value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export const ChartState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
