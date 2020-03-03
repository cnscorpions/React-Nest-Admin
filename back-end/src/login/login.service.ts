import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interfaces/user.interface";

@Injectable()
export class LoginService {

	constructor(@InjectModel("User") private readonly userModel: Model<User>) {

	}

	// 验证
	async validateLogin(args) {
		const { username, password } = args;
		const dataFromDB = await this.find(username);
		console.log(dataFromDB);
		if (username === dataFromDB.username && password === dataFromDB.password) {
			const data = {
				token: "abc-d"
			};
			return data;
		} else {
			throw new HttpException({
				status: HttpStatus.FORBIDDEN,
				error: "账户密码不正确，请重新输入！"
			}, 403);
		}
	}

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
