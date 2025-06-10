// [역할] 게시글(Post)와 관련된 작업을 하는 API 라우터
// : 'Posts' 테이블을 건드리는 파일임
// [연결] app.js에서 '/posts' 경로에 등록되어 동작함

import express from 'express';

const router = express.Router();

// 1. 게시글 생성(POST)

// 2. 전체 게시글 조회(GET)

// 3. 특정 게시글 조회(GET)

// 4. 게시글 수정(PUT)

// 5. 게시글 삭제(DELETE)

export default router;
// 다 만든 후 메인인 app.js에 가서,
// 1. router파일 가져오고
// import userRouter from "./routers/post.router.js"
// 2. 라우터 등록시켜야함
// app.use('/posts', postRouter);
