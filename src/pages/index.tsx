

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className="text-2xl text-center"> Which pokemon is the roundest in your opinion?</div>
      <div className="p-2"/>
      <div className="border rounder p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-200"/>
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-200"/>
      </div>
    </div>
  )
}
