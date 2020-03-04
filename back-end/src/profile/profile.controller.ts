import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ProfileService } from "./profile.service";

@Controller('profile')
export class ProfileController {

	constructor(private readonly profileService: ProfileService) {}

	@Get()
	getProfile(@Headers("authorization") token) {
		const result = this.profileService.verifyToken(token);
		return result;
	}
}
