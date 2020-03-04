import { Injectable } from '@nestjs/common';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class ProfileService {

	constructor(private readonly authService: AuthService) {}

	verifyToken(token) {
		const result = this.authService.verifyJWT(token);
		return result;
	}

}
