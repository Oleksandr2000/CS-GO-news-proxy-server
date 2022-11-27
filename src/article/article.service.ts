import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { GetArticleQueryDto } from './get-article.dto';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { FetchArticleResponce } from './article.types';

@Injectable()
export class ArticleService {
  constructor(private readonly httpService: HttpService) {}

  private toUpperCaseLengthCondition(item: any, condition: number) {
    const isHtmlTag = {
      status: true,
      endpoint: null,
    };

    let searchPoint: number;

    const empty = ' ';

    const isNewContent: string[] = [];

    const fillContent = () => {
      searchPoint = item.indexOf('<', isHtmlTag.endpoint);
      if (searchPoint === -1) {
        return;
      }
      const chunk = item.substring(isHtmlTag.endpoint, searchPoint).split(' ');

      chunk.forEach((item: any) => {
        if (item.length > condition) {
          isNewContent.push(`${item.toUpperCase()}${empty}`);
        } else {
          isNewContent.push(`${item}${empty}`);
        }
      });
    };

    for (let i = 0; i < item.length; i++) {
      if (item[i] === '<') {
        isHtmlTag.status = true;
      }
      if (item[i] === '>') {
        isHtmlTag.status = false;
        isHtmlTag.endpoint = i + 1;
        isNewContent.push('>');
        fillContent();
      }
      if (isHtmlTag.status) {
        isNewContent.push(item[i]);
      }
    }

    return isNewContent.join('');
  }

  async getOne(
    id: string,
    slug: string,
    query: GetArticleQueryDto,
  ): Promise<Observable<FetchArticleResponce>> {
    const res = this.httpService
      .get(
        `https://api.egw.news/counterstrike/news/${id}/${slug}?lang=${query.lang}`,
      )
      .pipe(
        map((axiosResponse: AxiosResponse<FetchArticleResponce>) => {
          const modContent = axiosResponse.data.article.contentArr.map(
            (item: string) => {
              if (item[0] !== '<') {
                return item;
              }
              return this.toUpperCaseLengthCondition(item, 5);
            },
          );

          axiosResponse.data.article.contentArr = modContent;

          return axiosResponse.data;
        }),
      );

    return res;
  }
}
