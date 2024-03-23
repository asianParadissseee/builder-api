import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NewsModule } from "./news/news.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: () => ({
      uri:process.env["MONGO_URI"]
    })
  }), NewsModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
