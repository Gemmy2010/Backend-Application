import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login, Signup, Profile, Chats, Home, EditProfile } from "./pages";
import { UserLoggedIn, ProtectedRoute } from "./helpers/authRoutes";
import { useAuthListener } from "./hooks/auth-listener";
import { CircleSpinner } from "./components/Spinner";
import { Centered } from "./styles/center";

function App() {
  const { user, loading } = useAuthListener();

  if (loading) {
    return (
      <Centered>
        <CircleSpinner loading={loading} />
      </Centered>
    );
  }

  return (
    <Router>
      <Switch>
        <UserLoggedIn exact path="/" user={user} loggedInPath="/home">
          <Login />
        </UserLoggedIn>
        <UserLoggedIn exact path="/signup" user={user} loggedInPath="/home">
          <Signup />
        </UserLoggedIn>
        <ProtectedRoute exact path="/profile" user={user}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute exact path="/home" user={user}>
          <Home />
        </ProtectedRoute>
        <ProtectedRoute exact path="/chats" user={user}>
          <Chats />
        </ProtectedRoute>
        <ProtectedRoute exact path="/edit-profile/:userId" user={user}>
          <EditProfile />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
