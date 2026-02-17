function ChatBubble({prompt}){
    return(
        <div className="flex flex-col w-fit max-w-[65%] leading-1.5 p-2 mt-4 bg-gray-300 rounded-md">
            <p className="text-sm text-body whitespace-pre-wrap wrap-break-word">{prompt}</p>
        </div>
    )
}

export default ChatBubble