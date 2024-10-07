import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  console.log("Project ID:", import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID); 
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={import.meta.env.VITE_REACT_APP_CHAT_ENGINE_PROJECT_ID} // Updated to use Vite's environment variables
        username={props.user.username} // Dynamically passing the username
        secret={props.user.secret} // Dynamically passing the secret
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ChatsPage;
