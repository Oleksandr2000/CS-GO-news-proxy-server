import { Controller, Get, Param, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ArticleService } from './article.service';
import { FetchArticleResponce } from './article.types';
import { GetArticleQueryDto } from './get-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('/:id/:slug')
  async getOne(
    @Param() param: { id: string; slug: string },
    @Query() query: GetArticleQueryDto,
  ): Promise<Observable<FetchArticleResponce>> {
    return await this.articleService.getOne(param.id, param.slug, query);
  }
}
