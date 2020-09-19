import React, { useState, useEffect } from "react";

class Dashboard extends React.Component {
  render() {
    return <div></div>;
  }
}

function App() {
  const [state] = useState("hello app");
}

<PrivateRoute
  component={Dashboard}
  path="dashboard"
  isAdmin={true}
  state={state}
/>;

function PrivateRoute(props) {
  const { component: Component, path, isAdmin, ...rest } = props;

  return <Component {...rest} from="PrivateRoute" />;
}
