'use client'
import TimerOptionButton from './TimerOptionButton'
import TimerStartButton from './TimerStartButton'
import { useState } from 'react'

const Timer: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState<number>(0)
    const [timerOn, setTimerOn] = useState<boolean>(false)

    return (
        <div className='w-80 h-80 bg-gray-800 rounded-md px-3 flex flex-col items-center py-4 gap-6 relative'>
            <div className='flex flex-row w-full gap-2'>
                <TimerOptionButton
                    selected={selectedOption === 0}
                    onClick={() => setSelectedOption(0)}
                >
                    30m
                </TimerOptionButton>
                <TimerOptionButton
                    selected={selectedOption === 1}
                    onClick={() => setSelectedOption(1)}
                >
                    45m
                </TimerOptionButton>
                <TimerOptionButton
                    selected={selectedOption === 2}
                    onClick={() => setSelectedOption(2)}
                >
                    1h
                </TimerOptionButton>
            </div>
            <div className='w-full h-40 bg-gray-900 rounded-md'></div>
            <TimerStartButton
                timerOn={timerOn}
                onClick={() => setTimerOn(prev => !prev)}
            />
        </div>
    )
}
export default Timer
