import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class News {
  @Prop( {required: true})
  backgroundImage: string;
  @Prop()
  title: string;
  @Prop({required: true})
  description: string;
  @Prop({ required: false })
  subDescription?: string;
}
export const NewsSchema = SchemaFactory.createForClass(News)