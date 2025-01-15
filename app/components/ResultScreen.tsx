'use client';

import { Trophy } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function ResultScreen({ score, totalQuestions, onRestart }: ResultScreenProps) {
  const percentage = (score / totalQuestions) * 100;
  
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      <div className="text-yellow-500">
        <Trophy size={64} />
      </div>
      
      <h2 className="text-3xl font-bold text-center">Quiz Complete!</h2>
      
      <div className="text-center">
        <p className="text-4xl font-bold text-primary mb-2">
          {score}/{totalQuestions}
        </p>
        <p className="text-muted-foreground">
          You scored {percentage}% on the quiz
        </p>
      </div>
      
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">
          {percentage >= 80 ? "Excellent work! You're a quiz master! 🎉" :
           percentage >= 60 ? "Good job! Keep practicing! 👍" :
           "Don't give up! Try again to improve your score! 💪"}
        </p>
        
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold 
                   hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}