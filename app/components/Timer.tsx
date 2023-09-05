'use client'
import { Howl } from 'howler'
import TimeDisplay from './TimeDisplay'
import TimerOptionButton from './TimerOptionButton'
import TimerStartButton from './TimerStartButton'
import { useEffect, useState } from 'react'

function getOptionSeconds(option: number) {
    if (option === 0) {
        return 30 * 60
    } else if (option === 1) {
        return 45 * 60
    } else if (option === 2) {
        return 60 * 60
    } else if (option === 3) {
        return 120 * 60
    }

    return 0
}

const Timer: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState<number>(0)
    const [timerOn, setTimerOn] = useState<boolean>(false)

    // time remaining in seconds
    const [timeRemainingInSeconds, setTimeRemainingInSeconds] = useState<number>(0)

    useEffect(() => {
        // if you change the selected option, set timerOn to false and reset the time remaining
        setTimerOn(false)

        setTimeRemainingInSeconds(getOptionSeconds(selectedOption))
    }, [selectedOption])

    useEffect(() => {
        if (timerOn) {
            // decrease the timer
            const timer = setInterval(() => {
                setTimeRemainingInSeconds(prev => {
                    if (prev <= 1) {
                        // Check if time reaches 0 or below
                        clearInterval(timer) // Clear the timer if the condition is met
                        setTimerOn(false) // Set timerOn to false
                        setTimeRemainingInSeconds(
                            getOptionSeconds(selectedOption)
                        ) // Reset timer

                        // play sound
                        const sound = new Howl({
                            src: ['/sounds/alarm.mp3'],
                            volume: 1.0,
                        })
                        sound.play()

                        return 0 // Return 0 to ensure time doesn't go negative
                    }
                    return prev - 1
                })
            }, 1000)

            return () => clearInterval(timer)
        }
    }, [timerOn])


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
                <TimerOptionButton
                    selected={selectedOption === 3}
                    onClick={() => setSelectedOption(3)}
                >
                    2h
                </TimerOptionButton>
            </div>
            <TimeDisplay timeRemainingInSeconds={timeRemainingInSeconds} />
            <TimerStartButton
                timerOn={timerOn}
                onClick={() => setTimerOn(prev => !prev)}
            />
        </div>
    )
}
export default Timer
