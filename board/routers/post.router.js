// [역할] 게시글(Post)와 관련된 작업을 하는 API 라우터
// : 'Posts' 테이블을 건드리는 파일임
// [연결] app.js에서 '/posts' 경로에 등록되어 동작함
import express from 'express';
import { prisma } from '../utils/prisma/index.js'; // 내보낸 prisma라는 유저(?)객체 가져옴

const router = express.Router();

// 1. 게시글 생성(POST)
router.post('/', async (req, res, next) => {
  const { title, content, userId } = req.body; // req.body에서 게시글의 제목, 내용, 작성자 ID를 받아옴
  const newPost = await prisma.posts.create({
    data: {
      title,
      content,
      userId: parseInt(userId),
    },
  });
  console.log(newPost); // 잘 생성되었는지 확인
  return res.send(newPost); // 생성된 게시글 정보 반환
});

// 2. 전체 게시글 조회(GET)
router.get('/', async (req, res, next) => {
  const posts = await prisma.posts.findMany();
  console.log(posts); // 잘 가져왔는지 확인
  return res.send(posts); // DB에서 모든 게시글 출력
});

// 3. 특정 게시글 조회(GET)
router.get('/:id', async (req, res, next) => {
  const post = await prisma.posts.findUnique({
    where: { postId: parseInt(req.params.id) },
  });
  console.log(post); // 잘 가져왔는지 확인
  return res.send(post); // DB에서 특정 게시글 출력
});

// 4. 게시글 수정(PUT)
router.put('/:id', async (req, res, next) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body; // req.body에서 수정할 정보인 title, content를 받아옴
  let post = await prisma.posts.findUnique({
    where: { postId },
  });
  console.log(post); // 수정 전 게시글 정보 확인
  post = await prisma.posts.update({
    where: { postId },
    data: {
      title,
      content,
    },
  });
  console.log(post); // 수정 후 게시글 정보 확인
  return res.send(post); // 수정된 게시글 정보 반환
});

// 5. 게시글 삭제(DELETE)
router.delete('/:id', async (req,res,next) => {
  await prisma.posts.delete({
    where: { postId: parseInt(req.params.id) },
  });
  return res.send(	
    { message: "deleted" }
  );
})

export default router;
// 다 만든 후 메인인 app.js에 가서,
// 1. router파일 가져오고
// import userRouter from "./routers/post.router.js"
// 2. 라우터 등록시켜야함
// app.use('/posts', postRouter);
