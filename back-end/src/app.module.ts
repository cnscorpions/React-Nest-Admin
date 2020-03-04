import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
  	LoginModule,
  	MongooseModule.forRoot('mongodb://localhost:27017/bookAdmindb', {
  		useNewUrlParser: true,
  		useUnifiedTopology: true 
  	})
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
