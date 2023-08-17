import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import type { Solutions } from '../lib/types'

const Result = () => {
  // получаем стейт из компонента Test через useLocation
  // опять же можно было бы сделать глобальный стейт с помощью Redux или Context API
  const location = useLocation()
  const solutionsFromTest = location.state.solutions
  // стейт для хранения ответов от сервера
  const [solutions, setSolutions] = useState<Solutions>({
    count: 0,
    results: [],
    percentage: 0,
    trueResults: [],
    testLength: 0
  })

  // useEffect для отправки ответов на сервер и получения результатов
  useEffect(() => {
    const getSolutions = async () => {
      const response = await axios.post(`http://localhost:3000/results`, solutionsFromTest);
      setSolutions(response.data)
    };
    getSolutions()
  }, [solutionsFromTest])

  return (
    <div className='w-full h-[100vh] bg-zinc-950 flex items-center justify-center'>
      <div className='w-[600px] py-8 px-6 flex flex-col items-center bg-zinc-800 rounded-md gap-8'>
        <h1 className='text-indigo-500 text-6xl font-bold'>
          {solutions.count}/{solutions.testLength}
        </h1>
        <h2 className='text-gray-400'>{solutions.percentage}%</h2>
        <div className='flex flex-col gap-4'>
          {solutions.results.map((result, index) => {
            return (
              <div key={index} className='flex items-center gap-4'>
                <div
                  className={`w-4 h-4 rounded-full ${
                    result ? 'bg-emerald-500' : 'bg-red-500'
                  }`}
                ></div>
                <p className='text-gray-300'>
                  {result
                    ? `Правильно! Ваш ответ: ${solutions.trueResults[index]}`
                    : `Правильный ответ: ${solutions.trueResults[index]}`}
                </p>
              </div>
            );
          })}
        </div>
        <Link
          to='/'
          className='py-4 px-8 border-[2px] border-yellow-500 rounded-md text-yellow-500 hover:text-white hover:border-white'
        >
          Вернуться на Главную
        </Link>
      </div>
    </div>
  );
}

export default Result