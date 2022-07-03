import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ChatBox from "../ChatBox";
import { ChartState } from "../Context/ChartProvider";
import SideDrawer from "../miscellaneous/SideDrawer";
import MyChats from "../MyChats";

const ChatPage = () => {
  const { user } = ChartState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="12px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
