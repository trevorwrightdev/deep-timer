import React from 'react';

import { useState } from 'react';

type TimerStartButtonProps = {
    onClick?: () => void
    timerOn: boolean
};

const TimerStartButton:React.FC<TimerStartButtonProps> = ({ onClick, timerOn }) => {
    
    const [mouseDown, setMouseDown] = useState<boolean>(false)

    return (
        <button
            type='button'
            className={`rounded-md bg-white/10 w-16 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 absolute ${
                !timerOn && !mouseDown ? 'border-b-4 border-gray-900 top-[260px]' : 'top-[264px]'
            }`}
            onClick={onClick}
            onMouseDown={() => setMouseDown(true)}
            onMouseUp={() => setMouseDown(false)}
            onMouseLeave={() => setMouseDown(false)}
        >
            {!timerOn ? 'work.' : 'stop.'}
        </button>
    )
}
export default TimerStartButton;