import { useEffect } from "react";
import { useState } from "react";

function useUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return user;
}

export default useUser;
