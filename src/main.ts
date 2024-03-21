import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as process from "process";
import { configDotenv } from "dotenv";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  configDotenv()
  const PORT = process.env.PORT
  const app = await NestFactory.create(AppModule, { cors: false });
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({ credentials: true, origin: true });
  const config = new DocumentBuilder()
    .setTitle("Builder Api")
    .setDescription("This api for ecommerce shop of build cards")
    .setVersion("1.0")
    .addTag("builder")
    .build();
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, doc);
  await app.listen(PORT, ()=> console.log(`SERVER STARTED ON PORT https://localhost:${PORT}`));
}

bootstrap();
