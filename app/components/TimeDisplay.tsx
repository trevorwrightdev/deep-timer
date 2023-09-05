import React from 'react';

type TimeDisplayProps = {
    timeRemainingInSeconds: number
};

function secondsToHHMMSS(seconds: number) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds - hours * 3600) / 60)
    const secs = seconds - hours * 3600 - minutes * 60

    return [hours, minutes, secs].map(v => (v < 10 ? '0' + v : v)).join(':')
}

const TimeDisplay:React.FC<TimeDisplayProps> = ({ timeRemainingInSeconds }) => {
    
    return <div className='w-full h-40 bg-gray-900 rounded-md grid place-items-center font-bold text-[48px]'>
        {secondsToHHMMSS(timeRemainingInSeconds)}
    </div>
}
export default TimeDisplay;