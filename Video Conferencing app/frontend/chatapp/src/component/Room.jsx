import React, { useState } from "react";

import "./Room.css";

const Room = () => {
  const [type, setType] = useState("");

  const handleCreateRoom = async () => {
    try {
      const room = Math.floor(Math.random() * 900) + 100;
      const response = await fetch(`http://localhost:3000/room/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomID: room, type: type }),
      });
      const data = await response.json();
      console.log(data);
      if (data.ok) {
        if (type === "message") {
          window.location.href = `./message.html?type=${type}&roomID=${room}`;
        } else if (type === "videochat") {
          window.location.href = `./videochat.html?type=${type}&roomID=${room}`;
        } else if (type === "screenshare") {
          window.location.href = `./screenshare.html?type=${type}&roomID=${room}`;
        }
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  const handleJoinRoom = async () => {
    const inputRoomID = prompt("Enter Your Room Number");
    if (inputRoomID) {
      try {
        const response = await fetch(`http://localhost:3000/room/join`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ roomID: inputRoomID, type: type }),
        });
        const data = await response.json();
        if (data.ok) {
          if (type === "message") {
            window.location.href = `./message.html?type=${type}&roomID=${inputRoomID}`;
          } else if (type === "videochat") {
            window.location.href = `./videochat.html?type=${type}&roomID=${inputRoomID}`;
          } else if (type === "screenshare") {
            window.location.href = `./screenshare.html?type=${type}&roomID=${inputRoomID}`;
          }
        } else {
          alert(data.msg);
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const urlType = urlParams.get("type");

  React.useEffect(() => {
    setType(urlType);
  }, [urlType]);

  return (
    <div>
      <h1>{getTitle(type)}</h1>
      <h2>Create/Join room to get started</h2>
      <div id="main">
        <div id="logoDiv">
          <img id="logo" src="./images/logo.png" alt="" />
        </div>
        <div id="create-room" onClick={handleCreateRoom}>
          Create Room
        </div>
        <div id="join-room" onClick={handleJoinRoom}>
          Join Room
        </div>
      </div>
    </div>
  );
};

const getTitle = (type) => {
  switch (type) {
    case "message":
      return "Talkies Chat Platform";
    case "videochat":
      return "Talkies Video Chat Platform";
    case "screenshare":
      return "Talkies Screen Sharing Platform";
    default:
      return "Talkies Meeting Platform";
  }
};

export default Room;
