
export interface Grade11MathQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
  subject: string;
}

// Empty mathematics data - ready for questions to be added
export const grade11Mathematics: { [chapter: string]: Grade11MathQuestion[] } = {
    "Algebra": [
        {
            "id": "m11-a-001",
            "question": "Solve for x: 2x + 5 = 15",
            "options": ["x = 5", "x = 10", "x = 2.5", "x = 7.5"],
            "correct": "x = 5",
            "explanation": "Subtract 5 from both sides to get 2x = 10, then divide by 2 to get x = 5.",
            "difficulty": "Easy",
            "chapter": "Algebra",
            "subject": "Mathematics"
        },
        {
            "id": "m11-a-002",
            "question": "Factor the expression: x^2 - 9",
            "options": ["(x-3)(x+3)", "(x-3)(x-3)", "(x+3)(x+3)", "x(x-9)"],
            "correct": "(x-3)(x+3)",
            "explanation": "This is a difference of squares, which factors into (a-b)(a+b).",
            "difficulty": "Easy",
            "chapter": "Algebra",
            "subject": "Mathematics"
        }
    ]
};

export const getGrade11MathQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Grade11MathQuestion[] => {
  const chapterQuestions = grade11Mathematics[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
