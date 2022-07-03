import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgesList = ({ handleFunction, user }) => {
  return (
    <Box
      px={2}
      py={2}
      borderRadius="lg"
      m={1}
      fontSize={12}
      background="purple"
      color="white"
      cursor="pointer"
      onClick={handleFunction}
      fontWeight="bold"
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgesList;
