import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
  	LoginModule,
  	MongooseModule.forRoot('mongodb://localhost:27017/bookAdmindb', {
  		useNewUrlParser: true,
  		useUnifiedTopology: true 
  	})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
