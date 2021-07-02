import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";

import "./homepage.styles.scss";

import { Box, List, ListItem, ListItemText } from "@material-ui/core";

const HomePage = ({ allThreads, history }) => {
  return (
    <Box
      margin="100px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <List>
        {allThreads && allThreads.length > 0 ? (
          allThreads.map((thread) => {
            return (
              <ListItem
                button
                key={thread._id}
                onClick={() => history.push(`/${thread._id}`)}
              >
                <ListItemText primary={thread.title} />
              </ListItem>
            );
          })
        ) : (
          <CircularProgress />
        )}
      </List>
    </Box>
  );
};

export default withRouter(HomePage);
