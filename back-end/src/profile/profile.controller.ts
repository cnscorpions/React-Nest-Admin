import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {

	@Get()
	getProfile() {
		return "it is profile!";
	}
}
