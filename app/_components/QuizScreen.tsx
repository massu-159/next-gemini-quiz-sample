"use client";

import { useState, useEffect } from "react";
import { Question } from "../_types";
import { Timer } from "lucide-react";
import ErrorScreen from "./ErrorScreen";

interface QuizScreenProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

export default function QuizScreen({ questions, onComplete }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion();
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  // クイズが生成されていない場合はエラー画面を表示
  if (questions === undefined) {
    return <ErrorScreen />;
  }

  const handleAnswerSelect = (choiceIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(choiceIndex);
    if (choiceIndex === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      onComplete(score);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(5);
    }
  };

  const getButtonClass = (index: number) => {
    if (selectedAnswer === null) return "bg-secondary hover:bg-secondary/80";
    if (index === questions[currentQuestion].answer) return "bg-green-500 text-white";
    if (selectedAnswer === index) return "bg-red-500 text-white";
    return "bg-secondary opacity-50";
  };

  const getTimerColor = () => {
    if (timeLeft <= 2) return "text-red-500";
    if (timeLeft <= 3) return "text-orange-500";
    return "text-primary";
  };

  return (
    <div className='max-w-2xl mx-auto p-6 space-y-8'>
      <div className='flex justify-between items-center'>
        <span className='text-sm text-muted-foreground'>
          Question {currentQuestion + 1}/{questions.length}
        </span>

        <div className={`flex items-center gap-2 ${getTimerColor()} transition-colors duration-300`}>
          <Timer className={`w-6 h-6 ${timeLeft <= 2 ? "animate-[pulse_0.5s_ease-in-out_infinite]" : ""}`} />
          <span
            className={`text-4xl font-bold tabular-nums
            ${timeLeft <= 2 ? "animate-[pulse_0.5s_ease-in-out_infinite] scale-110" : "scale-100"}
            transition-all duration-300`}
          >
            {timeLeft}
          </span>
        </div>
      </div>

      <div className='bg-card p-6 rounded-lg shadow-lg'>
        <h2 className='text-xl font-semibold mb-6'>{questions[currentQuestion].question}</h2>

        <div className='space-y-4'>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index + 1}
              onClick={() => handleAnswerSelect(index + 1)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-lg text-left transition-all transform hover:scale-[1.01] active:scale-[0.99] ${getButtonClass(
                index + 1
              )}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
