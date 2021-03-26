import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />;
      return (
          <ChatEngine
          height="100vh"
          projectID="58b496ad-ecf4-42c0-a603-64772d19b16a"
          userName={localStorage.getItem('username')}
          userSecret= {localStorage.getItem('password')}
          renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
       
          />
      );
}
export default App;