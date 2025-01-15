'use client';

import { useState, useCallback } from 'react';
import { questions } from './data/questions';
import { QuizState } from './types';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import ErrorScreen from './components/ErrorScreen';

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);

  const handleStart = useCallback(() => {
    setQuizState('quiz');
    setScore(0);
    setError(false);
  }, []);

  const handleComplete = useCallback((finalScore: number) => {
    setScore(finalScore);
    setQuizState('result');
  }, []);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  if (error) {
    return <ErrorScreen onReset={handleStart} />;
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {quizState === 'start' && <StartScreen onStart={handleStart} />}
        {quizState === 'quiz' && (
          <QuizScreen
            questions={questions}
            onComplete={handleComplete}
          />
        )}
        {quizState === 'result' && (
          <ResultScreen
            score={score}
            totalQuestions={questions.length}
            onRestart={handleStart}
          />
        )}
      </div>
    </main>
  );
}