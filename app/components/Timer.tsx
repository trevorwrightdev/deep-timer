'use client'
import TimerButton from './TimerButton'
import { useState } from 'react'

const Timer: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState<number>(0)

    return (
        <div className='w-80 h-80 bg-gray-800 rounded-md px-3 flex flex-col items-center py-4 gap-6'>
            <div className='flex flex-row w-full gap-2'>
                <TimerButton
                    selected={selectedOption === 0}
                    onClick={() => setSelectedOption(0)}
                >
                    30m
                </TimerButton>
                <TimerButton
                    selected={selectedOption === 1}
                    onClick={() => setSelectedOption(1)}
                >
                    45m
                </TimerButton>
                <TimerButton
                    selected={selectedOption === 2}
                    onClick={() => setSelectedOption(2)}
                >
                    1h
                </TimerButton>
            </div>
            <div className='w-full h-40 bg-gray-900 rounded-md'></div>
            <button
                type='button'
                className='rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20'
            >
                work.
            </button>
        </div>
    )
}
export default Timer
