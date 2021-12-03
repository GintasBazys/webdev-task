import React from "react";
import { Box, TextBaseBold } from "components";
import { white } from "styles/colors";
import PasswordTable from "../elements/PasswordTable";

const LeakedPasswords = () => {
  return (
    <Box zIndex="1" margin="4.375rem 0 1rem" background={white}>
      <TextBaseBold fontSize="3rem" textAlign="center">
        Top leaked asswords
      </TextBaseBold>
      <PasswordTable />
    </Box>
  );
};

export default LeakedPasswords;
