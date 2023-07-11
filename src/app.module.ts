import { Module } from '@nestjs/common';

import { BookModule } from './modules/book/book.module';


@Module({
  controllers: [],
  providers: [],
  imports: [BookModule],
})
export class AppModule {}
