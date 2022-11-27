import { Controller, Get, Param, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { GetArticleQueryDto } from './get-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('/:id/:slug')
  async getOne(
    @Param() param: { id: string; slug: string },
    @Query() query: GetArticleQueryDto,
  ) {
    return await this.articleService.getOne(param.id, param.slug, query);
  }
}
