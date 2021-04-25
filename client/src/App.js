import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainThread from "./components/MainThread";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={MainThread} />
        <Route path="/:threadId" component={MainThread} />
      </div>
    </Router>
  );
}

export default App;
