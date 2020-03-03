import { IsString } from "class-validator";

export class UserDto {

	@IsString()
	readonly username: string;

	@IsString()
	readonly password: string;
}
