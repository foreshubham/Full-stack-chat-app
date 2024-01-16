import { useState } from "react";

import "./App.css";

import AuthPage from "../src/AuthPage";
import ChatsPage from "../src/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;