import ChatBubble from "./ChatBubble"
import Refresh from "../assets/refresh.svg"
import React, { useEffect, useRef } from "react"

function Card({query,setQuery,askAI,messages,clean}){

    const messageEndRef = useRef(null)

    useEffect(() => {
            messageEndRef?.current.scrollIntoView({behavior : 'smooth'})
        }
    ,[messages])
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            e.preventDefault()
            askAI()
            setQuery('')
        }
    }
    
    return(
        <>
        <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden w-1/2 h-140 px-2 flex flex-col items-center bg-white rounded-lg shadow-md ">
            <nav className="flex sticky top-0 z-10 w-full bg-white p-4 border-b border-black justify-between">
                <h1 className="text-lg text-black ">PrepHelp-AI</h1>
                <img src={Refresh} alt="" className="w-7 h-7 rounded-full hover:bg-gray-300 active:bg-gray-400 " onClick={clean} />
            </nav>
            

            {messages?.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-black">
                        <h2 className="text-3xl font-medium">How can I help you today?</h2>
                    </div>
            ) : (
                messages.map((msg,index) => {
                    return(
                        <React.Fragment key={index}>
                            {msg.role === 'user' ? (
                                <div className="flex justify-end w-full">
                                    <ChatBubble prompt={msg.text}/>
                                </div> 
                            ) : (
                                <div className="flex w-full mt-2 py-4 px-4 text-md whitespace-pre-wrap">
                                    {msg.text}
                                </div>
                            )}
                        </React.Fragment>
                    )
                })
            )
            
            
            
            }

            <div className= "mt-3" ref={messageEndRef}></div>
        </div>
        <textarea 
            className="
                bg-white 
                text-heading
                text-sm
                flex
                w-1/2
                p-3.5
                m-2
                resize-none
                rounded-lg
                [&::-webkit-scrollbar]:hidden
                focus:outline-none
            "placeholder="Ask PrepHelp-AI"
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
            onKeyDown={handleKeyDown}
            ></textarea>

        </>
    )
}

export default Card