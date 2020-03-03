import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import * as jwt from "jsonwebtoken";
import { PRIVATE_KEY, JWT_EXPIRED } from "../utils/constant";
import { User } from "./interfaces/user.interface";

@Injectable()
export class LoginService {

	constructor(@InjectModel("User") private readonly userModel: Model<User>) {

	}

	// 验证
	async validateLogin(Body) {
		const { username, password } = Body;
		const user = await this.find(username);
		if ( user && user.password === password) {
			const token = this.createJWT(username);
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

	// generate jwt
	private createJWT(username) {
		const token = jwt.sign(
			{ username },
			PRIVATE_KEY,
			{ expiresIn: JWT_EXPIRED }
		);
		return token;
	}

}
