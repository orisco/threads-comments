import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import axios from "axios";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import Thread from "./pages/thread/thread.component";
import Navigation from "./components/navigation/navigation.component";
import StartNewThread from "./components/startNewThread/startNewThread.components";
import NewThread from "./pages/newThread/newThread.component";
import { Box } from "@material-ui/core";

function App() {
  const [allThreads, setAllThreads] = useState([]);
  // const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:1500/threads/")
      .then((res) => setAllThreads(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchOption = (e) => {
    // const { value } = e.target;
    // setSearchInput(value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <Navigation allThreads={allThreads} searchOption={searchOption} />
      <Switch>
        <Route
          path="/"
          exact
          component={() => <HomePage allThreads={allThreads} />}
        />
        <Route path="/add-new" exact component={NewThread} />
        <Route path="/:threadId" exact component={Thread} />
      </Switch>
      <StartNewThread />
    </Box>
  );
}

export default App;
