export interface Question {
    question: string
    answers: string[]
    correctAnswer: string
}

export interface Solutions {
  results: string[]
  count: number,
  percentage: number
  trueResults: string[],
  testLength: number
}
