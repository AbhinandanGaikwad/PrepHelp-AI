import { useState } from "react"
import Card from "./components/Card"

function App() {

  const[query,setQuery] = useState('')
  const[messages,setMessages] = useState([])

  const API_URL = import.meta.env.VITE_API_URL

  const askAI = async () =>{
      
      const userPrompt = {role : "user",text : query}

      setMessages((previousMessages) => [
        ...previousMessages,userPrompt
      ])

      const response = await fetch(`${API_URL}/ask`,{
          method: "POST",
          headers:{"content-type" : "application/json"},
          body : JSON.stringify({
            prompt : query,
            history : messages
          })
      })
        
      const data = await response.json()

      const aiResponse = {role : "model", text : data.reply}

      setMessages((previousMessages) => [
        ...previousMessages,aiResponse
      ])
      
  }

  const clean = () => {
    setMessages([])
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <Card query={query} setQuery={setQuery} askAI={askAI} messages = {messages} clean = {clean}/>
    </div>
  )
}

export default App
