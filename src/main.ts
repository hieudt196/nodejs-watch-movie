import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
      console.log('Start connect to database');
    })
    .catch((error) => console.log(error));

  await app.listen(3000);
}
bootstrap();
