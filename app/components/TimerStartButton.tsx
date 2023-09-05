import React from 'react';

import { useState } from 'react';

type TimerStartButtonProps = {
    onClick?: () => void
    pressed: boolean
};

const TimerStartButton:React.FC<TimerStartButtonProps> = ({ onClick, pressed }) => {
    
    const [mouseDown, setMouseDown] = useState<boolean>(false)

    return (
        <button
            type='button'
            className={`rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 absolute ${
                !pressed && !mouseDown ? 'border-b-2 border-white top-[260px]' : 'top-[262px]'
            }`}
            onClick={onClick}
            onMouseDown={() => setMouseDown(true)}
            onMouseUp={() => setMouseDown(false)}
            onMouseLeave={() => setMouseDown(false)}
        >
            work.
        </button>
    )
}
export default TimerStartButton;