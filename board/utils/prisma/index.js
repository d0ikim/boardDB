import { PrismaClient } from '@prisma/client'; // 데이터베이스 클라이언트 코드 가져옴

export const prisma = new PrismaClient({
  // Prisma 클라이언트 인스턴스 생성(실제로 DB에 접근하고 쿼리할 수 있는 객체)
  log: ['query', 'info', 'warn', 'error'], // Prisma 클라이언트의 로그 레벨 설정
  errorFormat: 'pretty', // 에러 포맷 설정
});
// Prisma 클라이언트 인스턴스를 내보내어 다른 모듈에서 사용할 수 있도록 함
