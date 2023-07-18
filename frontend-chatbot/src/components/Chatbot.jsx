import {Button} from 'react-bootstrap'

function Chatbot() {
  return (
    <div>
      <div className="chat-message">
        <div className="d-flex mt-2">
          <input type="text" className="form-control" />
          <Button type="primary">Send</Button>
        </div>
      </div>
    </div>
  )
}

export default Chatbot