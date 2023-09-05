type TimerButtonProps = {
    children: React.ReactNode
    selected: boolean
    onClick?: () => void
}

const TimerButton: React.FC<TimerButtonProps> = ({ children, selected, onClick }) => {
    return (
        <div className={`w-1/3 h-12 rounded-md grid place-items-center cursor-pointer font-semibold ${selected ? 'bg-gray-900' : ''}`} onClick={onClick}>
            {children}
        </div>
    )
}
export default TimerButton
