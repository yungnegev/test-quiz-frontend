import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
    question: string
    answers: string[]
    cardNumber: number
    setSolution: Dispatch<SetStateAction<{ 0: string; 1: string; 2: string; 3: string; }>>
}

const QuestionCard = ({ question, answers, cardNumber, setSolution }: Props) => {

  const [selectedAnswer, setSelectedAnswer] = useState<string>('')

  // при клике на ответ, записываем его в локальный стейт для подсветки кнопки
  // и в стейт родителя для хранения ответов (можно было бы сделать глобальный стейт с помощью Redux или Context API)
  const handleClickedAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setSolution((existingValues) => ({
        ...existingValues,
        [cardNumber]: answer
    }))
  }

  return (
    <div className='w-[660px] bg-zinc-800 px-8 py-6 rounded-md flex flex-col gap-4'>
        <h1 className='text-indigo-500 text-lg'>{question}</h1>
        <ul className='flex gap-8'>
            {answers.map((answer, index) => {
                return (
                    <li key={index} >
                        <button onClick={() => handleClickedAnswer(answer)} 
                                className={`hover:text-yellow-300 cursor-pointer py-2 px-4 rounded-md 
                                            bg-zinc-600 ${selectedAnswer === answer && 'text-yellow-300'}`}> 
                            {answer}
                        </button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default QuestionCard
