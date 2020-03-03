import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UserSchema } from "./schemas/user.schema";

@Module({
	imports: [
		MongooseModule.forFeature([{ name: "User", schema: UserSchema }])
	],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
