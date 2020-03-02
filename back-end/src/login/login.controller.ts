import { Controller, Post, Get, Query } from '@nestjs/common';
import { LoginService } from "./login.service";

@Controller('login')
export class LoginController {

	constructor(private loginService: LoginService) {

	}

	@Post()
	async login(@Query() query) {
		const res = {
			code: 0,
			msg: '登录成功'
		};
		return await res;
	}
}
