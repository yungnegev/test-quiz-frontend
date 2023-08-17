import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='w-full h-[100vh] flex items-center justify-center flex-col bg-zinc-950 gap-8'>
        <h1 className='text-xl font-bold text-indigo-500'>
          Добро пожаловать на тест!
        </h1>
        <Link to='/test' className='py-4 px-8 border-[2px] border-yellow-500 rounded-md text-yellow-500 hover:text-white hover:border-white'>Начать Тест</Link>
    </div>
  )
}

export default Home