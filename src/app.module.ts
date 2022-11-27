import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [ArticleModule, HttpModule],
})
export class AppModule {}
