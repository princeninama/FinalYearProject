import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Input } from "../assets/input";
import { Button } from "../assets/button";
import Icon from "./Icon";

const Bot = ({ setIsBot }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I assist you today?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for bot response

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      // Show user's message immediately
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputValue, isBot: false },
      ]);
      setInputValue("");
      setLoading(true); // Set loading state to true

      try {
        const resp = await fetch(
          `http://127.0.0.1:8000/querys?query=${inputValue}`
        );

        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        const data = await resp.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 2, text: data.message, isBot: true },
        ]);
      } catch (error) {
        console.error("Error fetching bot response:", error);
      } finally {
        setLoading(false); // Hide loading indicator when response is received
      }
    }
  };

  const handleClose = () => {
    setIsBot(false);
  };

  return (
    <div className="bg-gray-100 text-gray-800 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-3 rounded-t-lg">
        <h2 className="text-lg font-semibold">ChatBot</h2>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-700 p-1 rounded-full"
          onClick={handleClose}
        >
          <XIcon className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div className="h-[500px] overflow-auto px-4 py-3 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.isBot ? "justify-start" : "justify-end"
            }`}
          >
            <Avatar
              className={`w-8 h-8`}
            >
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>
                {message.isBot ? <Icon iu={true} /> : <Icon iu={false} />}
              </AvatarFallback>
            </Avatar>
            <div
              className={`max-w-[70%] px-4 py-2 rounded-lg text-sm shadow ${
                message.isBot
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {/* Typing Indicator for loading state */}
        {loading && (
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>
                <Icon iu={true} />
              </AvatarFallback>
            </Avatar>
            <div className="max-w-[70%] px-4 py-2 rounded-lg bg-blue-600 text-white">
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>
      <div
        className="border-t border-gray-200 px-4 py-3 flex items-center gap-2"
        onKeyDown={handleKeyDown}
      >
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <Button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center"
          onClick={handleSendMessage}
        >
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
};

export default Bot;

// Typing indicator animation component
function TypingIndicator() {
  return (
    <div className="flex space-x-1">
      <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-bounce delay-75"></div>
      <div className="h-2 w-2 bg-white rounded-full animate-bounce delay-150"></div>
    </div>
  );
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
  );
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
  );
}
