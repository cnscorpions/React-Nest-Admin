import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class LoginService {

	validateLogin(args) {
		const { username, password } = args;
		if (username === "admin" && password === "123") {
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
}
