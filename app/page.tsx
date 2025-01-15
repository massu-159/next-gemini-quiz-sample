"use client";

import { useState, useCallback } from "react";
import { Question, QuizState } from "./_types";
import StartScreen from "./_components/StartScreen";
import QuizScreen from "./_components/QuizScreen";
import ResultScreen from "./_components/ResultScreen";
import ErrorScreen from "./_components/ErrorScreen";
import generateQuiz from "./api/generateQuiz/route";

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState<Question[]>([]);

  const handleStart = useCallback(async () => {
    try {
      // クイズを生成
      const response = await generateQuiz();
      setQuiz(response);
    } catch (error) {
      handleError();
    }
    setQuizState("quiz");
    setScore(0);
    setError(false);
  }, []);

  const handleComplete = useCallback((finalScore: number) => {
    setScore(finalScore);
    setQuizState("result");
  }, []);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <main className='min-h-screen bg-background flex items-center justify-center'>
      <div className='w-full max-w-4xl'>
        {quizState === "start" && <StartScreen onStart={handleStart} />}
        {quizState === "quiz" && <QuizScreen questions={quiz} onComplete={handleComplete} />}
        {quizState === "result" && (
          <ResultScreen score={score} totalQuestions={quiz.length} onRestart={handleStart} />
        )}
      </div>
    </main>
  );
}
