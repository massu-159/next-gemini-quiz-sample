import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export default async function generateQuiz() {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `以下の条件に基づいて、世界各国の国名の由来に関するクイズを10問作成してください。

## 条件
1. 対象は国連加盟国193カ国から選ぶこと。
2. 各大陸から満遍なく選ぶこと。
3. 各クイズは次の形式で出力すること：
4. JSON形式の配列で出力すること。

[
  {
    "id": <数値>,
    "question": "<国名>の国名の由来は何ですか？",
    "options": [
      "<選択肢1>",
      "<選択肢2>",
      "<選択肢3>"
    ],
    "answer": <正解の選択肢の番号>
  },
]
4. 「options」には誤答を含め、3つの選択肢を用意すること。
5. 「answer」にはその国の国名の由来に関する正しい答えの選択肢の番号を記載すること。

例:
{
  "id": 1,
  "question": "「アフガニスタン」の国名の由来は何ですか？",
  "options": [
    "山の国",
    "アフガン人の土地",
    "戦士の集う場所"
  ],
  "answer": 2
}
`;
  console.log(prompt);

  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: { responseMimeType: "application/json" },
    });
    const quiz = JSON.parse(result.response.text());
    console.log(quiz);
    return quiz;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to generate content" });
  }
}
