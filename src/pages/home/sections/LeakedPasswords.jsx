import React from "react";
import { Box, TextBaseBold } from "components";
import { white } from "styles/colors";
import PasswordTable from "../elements/PasswordList";
import { useQuery } from "styles/breakpoints";

const LeakedPasswords = () => {
  const { isSmMobile } = useQuery();

  return (
    <Box margin="4.375rem 0 1rem" background={white}>
      <TextBaseBold
        margin="4.375rem 0"
        fontSize={isSmMobile ? "2rem" : "3rem"}
        textAlign="center"
      >
        Top leaked passwords
      </TextBaseBold>
      <PasswordTable />
    </Box>
  );
};

export default LeakedPasswords;
