import {ChatDots, Robot} from 'react-bootstrap-icons'
import PropTypes from 'prop-types'

function ChatMessage({user, message}) {
  return (
    <div className={`d-flex ${user && 'justify-content-end'}`}>
      {user ? (
        <span className='message-right'>
          <span className='message-text'>{message}</span>
          <ChatDots />
        </span>
      ) :
      <span className='message-left'>
        <Robot />
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