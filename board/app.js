import express from 'express';
import userRouter from './routers/user.router.js'; // 유저 관련 라우터
import postRouter from './routers/post.router.js'; // 게시글 관련 라우터
// Prisma 클라이언트 설정은 utils/prisma/index.js에서 관리한다고 가정

const PORT = 3000;
const app = express();
app.use(express.json());

app.use('/users', userRouter); // 유저 관련 라우터를 '/users' 경로에 등록
app.use('/posts', postRouter); // 게시글 관련 라우터를 '/post' 경로에 등록
// 기본 라우터 설정

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
