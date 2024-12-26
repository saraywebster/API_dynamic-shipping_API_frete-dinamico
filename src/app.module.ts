import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config, configDotenv } from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { FreightModule } from './modules/freight/freight.module';

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
    FreightModule,
  ],

  //FreightModule,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
