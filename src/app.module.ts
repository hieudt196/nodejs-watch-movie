import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDataSource, DatabaseModule } from './database';
import { MovieModule } from './movie';
import { UserModule } from './user';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    // TypeOrmModule.forRoot(),
    //   type: 'postgres',
    //   host: process.env.TYPEORM_HOST,
    //   port: +process.env.TYPEORM_PORT,
    //   username: process.env.TYPEORM_USERNAME,
    //   password: process.env.TYPEORM_PASSWORD,
    //   database: process.env.TYPEORM_DATABASE,
    //   // entities: ['dist/**/*.entity{.ts,.js}'],
    //   // migrations: ['migration/*{.ts,.js}'],
    //   // synchronize: false,
    // }),
    MovieModule,
    UserModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
