'use client';

import { AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/router';

export default function ErrorScreen() {
  const router = useRouter();
  const handleReset = () => {
    // スタート画面に戻る
    router.push('/');
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      <div className="text-destructive">
        <AlertTriangle size={64} />
      </div>
      
      <h2 className="text-3xl font-bold text-center">Oops! Something went wrong</h2>
      
      <p className="text-muted-foreground text-center max-w-md">
        We encountered an unexpected error. Please try again.
      </p>
      
      <button
        onClick={handleReset}
        className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold 
                 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
      >
        Reset Quiz
      </button>
    </div>
  );
}