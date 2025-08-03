import { useState, useEffect } from 'react';

interface AnswerEntry {
  questionIndex: number;
  question: string;
  selectedOption: string;
  timestamp: string;
}

export const useKinobiSurvey = (questions: string[][]) => {
  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    const stored = localStorage.getItem('kinobi_survey_answers');
    return stored ? JSON.parse(stored) : {};
  });

  const userId = (() => {
    const existing = localStorage.getItem('kinobi_user_id');
    if (existing) return existing;
    const id = crypto.randomUUID();
    localStorage.setItem('kinobi_user_id', id);
    return id;
  })();

  const saveAnswer = (questionIndex: number, selectedOption: string) => {
    const newAnswers = { ...answers, [questionIndex]: selectedOption };
    setAnswers(newAnswers);
    localStorage.setItem('kinobi_survey_answers', JSON.stringify(newAnswers));

    const payload: AnswerEntry = {
      questionIndex,
      question: questions[questionIndex][0],
      selectedOption,
      timestamp: new Date().toISOString(),
    };

    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('user_sub_type', 'responses');
    formData.append('questionIndex', questionIndex.toString());
    formData.append('question', questions[questionIndex][0]);
    formData.append('selectedOption', selectedOption);
    formData.append('timestamp', new Date().toISOString());

    fetch('https://script.google.com/macros/s/AKfycbyBKafEvoe9IMX57RtP7ZuUEglvu1HVhy2RUAeBHfjdMoBgcEyDckvB7Wi2jzCyXAeG/exec', {
      method: 'POST',
      body: formData
    })
      .then(async response => {
      const text = await response.text();
      console.log('HTTP Response:', response.status, response.statusText, text);
      })
      .catch(error => {
      console.error('Fetch error:', error);
      });
    
  };

  return { answers, saveAnswer };
};