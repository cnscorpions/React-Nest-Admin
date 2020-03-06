import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('ebook')
export class EbookController {

	// upload ebook
	@Post("upload")
	@UseInterceptors(FileInterceptor("file"))
	uploadEbook(@UploadedFile() file) {
		console.log(file);
	}

}
