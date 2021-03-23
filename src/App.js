import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{
      return (
          <ChatEngine
          height="100vh"
          projectID="58b496ad-ecf4-42c0-a603-64772d19b16a"
          userName="javascriptmastery"
          userSecret="1326"
          renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
       
          />
      );
}
export default App;