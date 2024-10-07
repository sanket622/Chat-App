import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="5a6a0436-7e3b-4761-a7f5-76822d00f6d5" // Same projectId
        username={props.user.username} // Dynamically passing the username
        secret={props.user.secret} // Dynamically passing the secret
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default ChatsPage;
