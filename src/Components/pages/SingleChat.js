import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChartState } from "../Context/ChartProvider";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChartState();

  return (
    <>
      {selectedChat ? (
        <></>
      ) : (
        <Box d="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
