import {ChatDots, Robot} from 'react-bootstrap-icons'
import PropTypes from 'prop-types'

function ChatMessage({user, message, date, hour}) {
  return (
    <div className={`d-flex ${user && 'justify-content-end'}`}>
      {user ? (
        <span className='message-right'>
          <span className='message-text'>{message}</span>
          <ChatDots className='message-icon' />
          <span> - {date} </span>
          <span>{hour}</span>
        </span>
      ) :
      <span className='message-left'>
        <Robot className='message-icon' />
        <span className='message-text'>{message}</span>
      </span>
      }
    </div>
  )
}

ChatMessage.propTypes = {
  user: PropTypes.string,
  message: PropTypes.string
}.isRequired;

export default ChatMessage