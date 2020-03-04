import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interfaces/user.interface";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class LoginService {

	constructor(
		@InjectModel("User") private readonly userModel: Model<User>,
		private readonly authService: AuthService
		) {
	}

	async validateLogin(Body) {
		const { username, password } = Body;
		const user = await this.find(username);
		if ( user && user.password === password) {
			const token = this.authService.createJWT(username);
			return {
				token: token
			};
		} else {
			throw new HttpException({
				status: HttpStatus.FORBIDDEN,
				error: "账户密码不正确，请重新输入！"
			}, 403);
		}
	}

	// query in mongodb
	private async find(username: string): Promise<User>{
		return this.userModel.findOne({ 
			username: username 
		}, 
		{ 
			username : 1,
			password: 1,
			_id: 0
		}).exec();
	}

}
