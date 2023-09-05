import Timer from '@components/Timer'
import TextBox from '@components/TextBox'

export default function Home() {
  return (
    <div className='pt-20 w-screen flex flex-col items-center gap-4'>
      <Timer />
      <TextBox />
    </div>
  )
}
