import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { Input } from "./input"
import { Button } from "./button"
import Icon from "./Icon"

const Bot = ({ setIsBot }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I assist you today?",
      isBot: true,
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [loading, setLoading] = useState(false) // Loading state for bot response

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      // Show user's message immediately
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputValue, isBot: false },
      ])
      setInputValue("")
      setLoading(true) // Set loading state to true

      try {
        const resp = await fetch(`http://127.0.0.1:8000/querys?query=${inputValue}`)
        
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`)
        }

        const data = await resp.json()
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 2, text: data.message, isBot: true },
        ])
      } catch (error) {
        console.error("Error fetching bot response:", error)
      } finally {
        setLoading(false) // Hide loading indicator when response is received
      }
    }
  }

  const handleClose = () => {
    setIsBot(false)
  }

  return (
    <div className="bg-gray-400 text-foreground rounded-lg shadow-lg w-full">
      <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-3 rounded-t-lg">
        <h2 className="text-lg font-medium">ChatBot</h2>
        <Button variant="ghost" size="icon" className="text-primary-foreground" onClick={handleClose}>
          <XIcon className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div className="h-[500px] overflow-auto px-4 py-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 mb-4 ${message.isBot ? "justify-start" : "justify-end self-end text-right"
              }`}
          >
            <Avatar className={`w-8 h-8 ${message.isBot ? "bg-primary" : "bg-secondary"}`}>
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>{message.isBot ? <Icon iu={true} /> : <Icon iu={false} />}</AvatarFallback>
            </Avatar>
            <div
              className={`max-w-[70%] px-3 py-2 rounded-lg ${message.isBot ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {/* Typing Indicator for loading state */}
        {loading && (
          <div className="flex items-start gap-3 mb-4 justify-start">
            <Avatar className="w-8 h-8 bg-primary">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback><Icon iu={true} /></AvatarFallback>
            </Avatar>
            <div className="max-w-[70%] px-3 py-2 rounded-lg bg-primary text-primary-foreground">
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>
      <div className="border-t px-4 py-3 flex items-center" onKeyDown={handleKeyDown}>
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 mr-2"
        />
        <Button onClick={handleSendMessage}>
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  )
}

export default Bot

// Typing indicator animation component
function TypingIndicator() {
  return (
    <div className="flex space-x-1">
      <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-bounce delay-75"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-bounce delay-150"></div>
    </div>
  )
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
