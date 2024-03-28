import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  id: number
  @Prop()
  email: string;
  @Prop()
  fullName: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);