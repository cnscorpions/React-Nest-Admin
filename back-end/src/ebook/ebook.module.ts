import { Module } from '@nestjs/common';
import { EbookController } from './ebook.controller';
import { EbookService } from './ebook.service';

@Module({
  controllers: [EbookController],
  providers: [EbookService]
})
export class EbookModule {}
