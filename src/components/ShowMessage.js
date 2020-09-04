import React from "react";
import useUser from "../hooks/useUser";

function ShowMessage({ userId }) {
  const user = useUser(userId);

  return <div>{user?.name}</div>;
}

export default React.memo(ShowMessage);
