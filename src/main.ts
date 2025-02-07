import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CostDeliveryModule } from './modules/cost-delivery/cost-delivery.module';
import { ZoneModule } from './modules/zone/zone.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const zoneConfig = new DocumentBuilder()
    .setTitle('Zone API')
    .setDescription('API for management of zones in a delivery system')
    .setVersion('1.0')
    .build();

  const zoneDocument = SwaggerModule.createDocument(app, zoneConfig, {
    include: [ZoneModule],
  });

  SwaggerModule.setup('api/zone', app, zoneDocument);

  const costConfig = new DocumentBuilder()
    .setTitle('Cost Delivery API')
    .setDescription('API for management of freight in a delivery system')
    .setVersion('1.0')
    .build();

  const costDocument = SwaggerModule.createDocument(app, costConfig, {
    include: [CostDeliveryModule],
  });

  SwaggerModule.setup('api/cost-delivery', app, costDocument);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
