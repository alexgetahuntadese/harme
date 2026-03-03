
export interface Grade11PhysicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
  subject: string;
}

export const grade11Physics: { [chapter: string]: Grade11PhysicsQuestion[] } = {
  'Chapter 1: Mechanics': [
    {
      id: 'g11phy_mech_e1',
      question: 'What is the SI unit of force?',
      options: ['Newton', 'Joule', 'Watt', 'Pascal'],
      correct: 'Newton',
      explanation: 'The Newton (N) is the SI unit of force, defined as kg⋅m/s².',
      difficulty: 'Easy',
      chapter: 'Chapter 1: Mechanics',
      subject: 'Physics'
    },
    {
      id: 'g11phy_wave_h1',
      question: 'If a wave has frequency 50 Hz and wavelength 2 m, what is its speed?',
      options: ['100 m/s', '25 m/s', '52 m/s', '48 m/s'],
      correct: '100 m/s',
      explanation: 'Wave speed = frequency × wavelength = 50 Hz × 2 m = 100 m/s.',
      difficulty: 'Hard',
      chapter: 'Chapter 2: Waves and Sound',
      subject: 'Physics'
    }
  ]
};

export const getGrade11PhysicsQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Grade11PhysicsQuestion[] => {
  const chapterQuestions = grade11Physics[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
