import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'; 
const ChatsPage = (props) => {
  
  const chatProps = useMultiChatLogic('Paste your Project ID',props.username, props.user.secret);
  
  return <div style= {{height: '100vh',width:'100vw'}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps} style={{height:'100%',width:'100vw'}} />
  </div>
  };
  export default ChatsPage;

