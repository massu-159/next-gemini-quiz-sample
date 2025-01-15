"use client";

import { Brain } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className='flex flex-col items-center justify-center space-y-8 p-8'>
      <div className='text-primary animate-pulse'>
        <Brain size={64} />
      </div>
      <h1 className='text-4xl font-bold text-center'>Knowledge Quest</h1>
      <p className='text-muted-foreground text-center max-w-md'>
        Test your knowledge with 10 exciting questions. You have 5 seconds for each question. Are you ready?
      </p>
      <button
        onClick={onStart}
        className='px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl'
      >
        Start Quiz
      </button>
    </div>
  );
}
