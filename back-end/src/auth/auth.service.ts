import { Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken";
import { PRIVATE_KEY, JWT_EXPIRED } from "../utils/constant";

@Injectable()
export class AuthService {

	// generate jwt
	createJWT(username) {
		const token = jwt.sign(
			{ username },
			PRIVATE_KEY,
			{ expiresIn: JWT_EXPIRED }
		);
		return token;
	}

	// verify jwt
	verifyJWT(token) {
		const decoded = jwt.verify(token, PRIVATE_KEY);
		return decoded;
	}
}
