import React, { useState } from 'react';
import './App.css';
function App(){
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, [])
  return(
    <>
    <div className="Main_div">
      <div className="App">
      <h1>USERS LIST.</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
              
            );
          })}
      </div>
    </div>
    </div>
    </>
  );
}
export default App;