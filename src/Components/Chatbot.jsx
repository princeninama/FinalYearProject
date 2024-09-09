import React from 'react'
import Bot from '../chatbot/Bot'


const ChatBot = ({setIsBot}) => {
  return (
    <div className="flex justify-center pt-4 w-full max-w-2xl" >
      <Bot setIsBot={setIsBot} />
    </div>
  )
}

export default ChatBot
