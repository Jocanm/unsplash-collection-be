import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  const config = new DocumentBuilder()
    .setTitle('Unsplash Collection API')
    .setDescription('The Unsplash Collection API description')
    .setVersion('1.0')
    .addTag('unsplash-collection')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory());

  app.enableCors({
    allowHeaders: '*',
    origin: '*',
    credentials: true
  });

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
