import { Prop } from '@nestjs/mongoose';

export class Application {

  @Prop({type: String, required: true})
  fullName: string;
  @Prop({type: String, required: true})
  phoneNumber: string;
}
