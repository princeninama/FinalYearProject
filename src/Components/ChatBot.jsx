import React,{forwardRef} from 'react'
import Bot from '../chatbot/Bot'


const ChatBot = forwardRef(({setIsBot},ref) => {
  return (
    <div ref={ref} className="flex justify-center pt-4 w-full max-w-2xl" >
      <Bot setIsBot={setIsBot} />
    </div>
  )
});

export default ChatBot
