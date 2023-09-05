type TimerOptionButtonProps = {
    children: React.ReactNode
    selected: boolean
    onClick?: () => void
}

const TimerOptionButton: React.FC<TimerOptionButtonProps> = ({
    children,
    selected,
    onClick,
}) => {
    return (
        <div
            className={`w-1/3 h-12 rounded-md grid place-items-center cursor-pointer font-semibold ${
                selected ? 'bg-gray-900 shadow-lg' : ''
            }`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
export default TimerOptionButton
