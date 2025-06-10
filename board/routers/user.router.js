// [역할] 유저(User)와 관련된 작업을 하는 API 라우터
// : 'Users' 테이블을 건드리는 파일임
// [연결] app.js에서 '/users' 경로에 등록되어 동작함
import express from 'express';
import { prisma } from '../utils/prisma/index.js'; // 내보낸 prisma라는 유저(?)객체 가져옴

const router = express.Router();

// 1. 유저 생성(POST)
router.post('/', async (req, res, next) => {
  const { email, name } = req.body;
  try {
    // 기존에 DB에 이메일이 있는지 없는지 확인
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });
    // 이메일이 있으면 중복 안내
    if (existingUser) {
      return res.send({
        message: '중복된 아이디가 있습니다.',
      });
    }
    // 이메일 없으면 유저 생성
    const newUser = await prisma.users.create({
      data: {
        email,
        name,
      },
    });
    return res.send(newUser); // 생성된 유저 정보 반환
  } catch (e) {
    console.log(e);
  }
});

// 2. 전체 유저 목록 조회(GET)
router.get('/', async (req, res, next) => {
  const users = await prisma.users.findMany(); // prisma변수를 이용해 실제로 DB에 접근해 쿼리작업( users테이블에 있는 모든 유저 가져오기 )
  console.log(users);
  return res.send({
    users, // DB에서 모든 유저 출력
  });
});

// 3. 특정 유저 정보 조회(GET)
// id: number 라는 req.body를 받아서
const id = 'id'; // :id로 라우터를 만들기 위해 변수 선언
router.get(`/:${id}`, async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: { id: req.body.id },
  });
  console.log(user);
  return res.send({
    user, // DB에서 특정 유저 출력
  });
});

// 4. 유저 정보 수정(PUT)

// 5. 유저 삭제(DELETE)

// 6. 특정 유저의 게시글 조회(GET)

export default router;
// 다 만든 후 메인인 app.js에 가서,
// 1. router파일 가져오고
// import userRouter from "./routers/user.router.js"
// 2. 라우터 경로 등록시켜야함
// app.use('/users', userRouter);
