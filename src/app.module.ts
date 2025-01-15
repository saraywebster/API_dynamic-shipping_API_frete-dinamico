import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
//import { config, configDotenv } from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { ZoneModule } from './modules/zone/zone.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // false
    }),
    ZoneModule,
  ],
})
export class AppModule {}
