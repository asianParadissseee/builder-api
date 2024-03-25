import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class News {
  @Prop({ type: String, default: () => uuidv4() })
  _id: string;
  @Prop({ required: true })
  backgroundImage: string;
  @Prop()
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: false })
  subDescription?: string;
  @Prop({ default: Date.now })
  createAt: Date;
}

export const NewsSchema = SchemaFactory.createForClass(News);
NewsSchema.set('autoCreate', true);