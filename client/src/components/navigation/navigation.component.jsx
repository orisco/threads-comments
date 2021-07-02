import React from "react";

import { Box, IconButton, InputBase, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "black",
  },
  font: {
    color: "white",
    fontWeight: 500,
    paddingLeft: "50px",
  },
  input: {
    color: "white",
  },
});

const Navigation = ({ searchOption }) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100vw"
      className={classes.root}
    >
      <Typography variant="h2" className={classes.font}>
        threads
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={classes.input}
        marginRight="10px"
      >
        <InputBase
          placeholder="Search Threads"
          onChange={searchOption}
          inputProps={{
            className: classes.input,
          }}
        />
        <IconButton type="submit" aria-label="search" className={classes.input}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navigation;
