import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NewsModule } from "./news/news.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: () => ({
      uri:process.env["MONGO_URI"]
    })
  }), NewsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
