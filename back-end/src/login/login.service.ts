import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

	validateLogin(username: string, password: string) {
		if (username === "admin" && password === "123") {
			return true;
		}
	}
}
