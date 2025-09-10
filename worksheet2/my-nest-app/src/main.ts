import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

// 加载 .env 文件中的环境变量
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 优先使用 .env 中配置的端口，若未配置或配置无效则使用 5000
  await app.listen(process.env.PORT || 5000);
}
bootstrap();