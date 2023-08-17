import { useEffect, useState } from 'react'
import axios from 'axios'
import QuestionCard from '../components/QuestionCard'
import { type Question } from '../lib/types'
import { Link } from 'react-router-dom'
import { useTimer } from '../hooks/useTimer'
import { useNavigate } from 'react-router-dom'


const Test = () => {
  // использую тейлвинд чтобы быстро стилизовать компоненты
  // длинна теста в секундах чтобы было удобно менять 
  const TEST_LENGTH = 30
  // стейт для хранения вопросов
  // стейт для хранения ответов
  // можно было бы сделать глобальный стейт с помощью Redux или Context API
  const [questions, setQuestions] = useState<Question[]>([])
  const [solutions, setSolution] = useState({})
  // навигация для перехода на страницу с результатами при оконачании таймера
  const navigate = useNavigate()
  // useEffect для получения вопросов с сервера
  // можно было бы сделать сделать кастомный хук для запросов на сервер
  // еще лучше использовать библиотеку react-query или rtk-query
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:3000/questions`);
      setQuestions(response.data.questions)
    };
    getData()
  },[])

  // кастомный хук для таймера, возвращает время в секундах и по истечению времени переходит на страницу с результатами
  const time = useTimer(TEST_LENGTH, () => navigate('/result', {state: {solutions: solutions}}))

  return (
    <div className='bg-zinc-950 w-full flex flex-col items-center gap-[60px] pt-24'>
      <div className='text-4xl text-yellow-300'>
        {time}
      </div>
      <div className='flex flex-col items-center gap-8 my-6'>
        {questions.map((question, index) => {
          return <QuestionCard 
                    key={index} 
                    question={question.question} 
                    answers={question.answers} 
                    setSolution={setSolution}
                    cardNumber={index}/>;
        })}
      </div>
      <Link to='/result'
            state={{solutions: solutions}}
            className='py-4 px-8 bg-emerald-500 rounded-md hover:bg-emerald-300 mb-20'>
        Закончить Тест
      </Link>
    </div>
  );
}

export default Test