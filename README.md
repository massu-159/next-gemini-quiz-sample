# next-gemini-quiz-sample
bolt.newに以下のプロンプトを送信して、世界各国の国名の由来について出題するクイズアプリを作成。

正解だと思う選択肢を3択から選ぶ。
制限時間は5秒
全10問

bolt.newに利用したプロンプト
```
Create a Next.js application using the appRouter and TailwindCSS with TypeScript. The application should be a three-choice quiz app with the following specifications:

#### Features
Start Screen:

Display a "Start Quiz" button that transitions to the quiz screen.
Quiz Screen:

Display a question with three answer choices.
Include a timer that counts down from 5 seconds. When time is up, automatically move to the next question.
Feedback for correct/incorrect answers is optional but preferred.
Result Screen:

Show the user's total score out of 10.
Option to restart the quiz.
Error Screen:

A fallback screen to handle unexpected errors.
#### Functionality
The quiz should consist of 10 questions.
After completing the 10 questions, navigate to the result screen.
#### Technical Requirements
Use Next.js with the appRouter.
Style the app with TailwindCSS for responsiveness and simplicity.
Implement the app in TypeScript for type safety.
Add comments in the code to explain key parts of the implementation.

```

Gemini API を使ってクイズを自動生成。

urlはこちら
https://github.com/massu-159/next-gemini-quiz-sample


## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install
# または
yarn
# または
pnpm install
# または
bun install
```

### 1-2. アプリケーション実行

```
npm run dev
# または
yarn run dev
# または
pnpm run dev
# または
bun run dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- Gemini API
  - クイズ自動生成

### 2-2. 構成技術
    "@google/generative-ai": "^0.21.0",
    "@hookform/resolvers": "^3.9.0",
    "@next/swc-wasm-nodejs": "13.5.1",
    "@types/node": "20.6.2",
    "@types/react": "18.2.22",
    "@types/react-dom": "18.2.7",
    "autoprefixer": "10.4.15",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "eslint": "8.49.0",
    "eslint-config-next": "13.5.1",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.446.0",
    "next": "13.5.1",
    "next-themes": "^0.3.0",
    "postcss": "8.4.30",
    "react": "18.2.0",
    "react-day-picker": "^8.10.1",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss": "3.3.3",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "5.2.2",
    "vaul": "^0.9.9",
    "zod": "^3.23.8"
