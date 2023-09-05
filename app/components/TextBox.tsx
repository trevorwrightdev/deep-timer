'use client'
import { useState, useEffect } from 'react'

const TextBox: React.FC = () => {
    const [text, setText] = useState('')

    // On mount, set the text from local storage if available
    useEffect(() => {
        const savedText = localStorage.getItem('textboxValue')
        if (savedText) {
            setText(savedText)
        }
    }, []) // Empty dependency array means this useEffect runs once when the component mounts

    // Update both the state and local storage whenever the textarea value changes
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value
        setText(newValue)
        localStorage.setItem('textboxValue', newValue)
    }

    return (
        <textarea
            value={text}
            onChange={handleTextChange}
            className='resize-none border-gray-900 border-2 rounded-md w-[350px] sm:w-[600px] h-80 py-1 px-2 text-gray-500 bg-black outline-none'
            spellCheck='false'
        />
    )
}

export default TextBox
