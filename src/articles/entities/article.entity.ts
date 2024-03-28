  import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


  @Schema()
  export class Article {
    @Prop({ required: true })
    backgroundImage: string;
    @Prop({ required: true })
    title: string;
    @Prop({ required: true })
    subTitle: string;
    @Prop({ required: true })
    description: string;
    @Prop({  default: Date.now })
    createAt: Date;
  }


  export const ArticleSchema = SchemaFactory.createForClass(Article);