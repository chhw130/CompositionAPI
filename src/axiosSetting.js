import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://34.64.253.107:8080',
});

export const getCategory = async () => {
  const data = await instance.get('/categories');
  return data;
};

export const postQuiz = async () => {
  instance.post('/c1/test/quiz', {
    quizId: 2, // 특정 퀴즈 pk
    isCorrect: false, // 정답 여부
  });
};
