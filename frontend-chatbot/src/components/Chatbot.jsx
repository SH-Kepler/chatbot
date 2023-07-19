import { useState } from 'react';
import {Button} from 'react-bootstrap';
import { analyse } from '../utils/answers';
import { useNavigate } from 'react-router-dom';
import ChatMessage from './ChatMessage';
import axios from 'axios';
import moment from 'moment';

function Chatbot() {
  const navigateTo = useNavigate();
  const [messages, setMessages] = useState([
    {
      message: 'say "hello", to initiate a conversation'
    }
  ]);
  const [text, setText] = useState('');
  const users = JSON.parse(localStorage.getItem('user'))

  const finishChat = () => {
    const jsonMessages = JSON.stringify(messages)
    axios.post('http://localhost:3001/chat', {
      chat: jsonMessages, email: users.email,
    }).then(({ data }) => {
      localStorage.setItem('chatId', JSON.stringify(data.createChat.id));
      navigateTo('/history')
    })
  }

  const onSend = (event) => {
    event.preventDefault()
    let list = [...messages, {date: moment().format('L'), hour: moment().format('LT'), message: text, user: true}]
    if(text.includes('goodbye')) {
      finishChat()
    }
    if(list.length > 2) {
      const reply = analyse(text, list)
      list = [
        ...list,
        {message: reply}
      ]
    } else {
        if(!users) {
          navigateTo('/login')
           
        } else {
            list = [
              ...list,
              {
                message: `Hi!, if you want to do a loan just type "loan", and I will give you the options.`
              },
              {
                message: `To end the conversation, type "Goodbye"`
              }
            ]   
        }
    }

    setMessages(list);
    setText('');
  }

  return (
    <div className='App'>
      <div className="d-flex align-items-center mt-4 justify-content-center">
        <h2>Chatbot</h2>
      </div>

        <form onSubmit={onSend}>
          <div className="chat-message">
            {messages.length > 0 && messages.map((data, i) => <ChatMessage key={i} {...data} />)}
            <div className="d-flex mt-2">
              <input
                type="text"
                className="form-control mt-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button className='ms-2 mt-2' type="primary">Send</Button>
            </div>
            <p className='mt-3'>♠︎</p>
          </div>
        </form>
    </div>
  )
}

export default Chatbot