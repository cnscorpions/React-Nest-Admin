import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { AuthService } from "../auth/auth.service";

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, AuthService]
})
export class ProfileModule {}
