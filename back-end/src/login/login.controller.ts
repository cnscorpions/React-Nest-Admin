import { Controller, Post, Get, Query } from '@nestjs/common';
import { LoginService } from "./login.service";

@Controller('login')
export class LoginController {

	constructor(private loginService: LoginService) {

	}

	@Post()
	async login(@Query() query) {
		const data = {
			token: "abc-d"
		};
		return await data;
	}
}
