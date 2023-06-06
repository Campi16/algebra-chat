import React, { useState, useRef, useEffect } from "react";
import { Auth } from "./components/Auth";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Cookies from "universal-cookie";
import "./App.css";
const cookies = new Cookies();

const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(
    localStorage.getItem("current-room") || null
  );

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
    localStorage.removeItem("current-room");
  };

  useEffect(() => {
    if (room) {
      localStorage.setItem("current-room", room);
    }
  }, [room]);

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <Chat room={room} setRoom={setRoom} />
      ) : (
        <div className="room">
          <label>Enter Room Name:</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}

      <div className="sign-out">
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default App;
