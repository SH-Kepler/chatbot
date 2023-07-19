import { useState } from 'react'
import {Button} from 'react-bootstrap'
import { analyse } from '../utils';
import ChatMessage from './ChatMessage'

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: 'say "hello", to initiate a conversation'
    }
  ]);
  const [text, setText] = useState('');

  const onSend = (event) => {
    event.preventDefault()
    let list = [...messages, {message: text, user: true}]
    if (list.length > 2) {
      const reply = analyse(text, list)
      list = [
        ...list,
        {message: reply}
      ]
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

    setMessages(list);
    setText('');
  }

  return (
    <div>
      <form onSubmit={onSend}>
        <div className="chat-message">
          {messages.length > 0 && messages.map((data, i) => <ChatMessage key={i} {...data} />)}
          <div className="d-flex mt-2">
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button type="primary">Send</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Chatbot