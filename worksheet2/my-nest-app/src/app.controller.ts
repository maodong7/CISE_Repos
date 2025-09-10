import { Controller, Get, Param } from '@nestjs/common';
import { ARTICLES } from './dummydata/articles';

@Controller('api/articles')
export class AppController {
  // 获取所有文章的 API 端点
  @Get()
  findAll() {
    return ARTICLES;
  }

  // 根据 ID 获取单篇文章的 API 端点
  @Get(':id')
  findOne(@Param('id') id: string) {
    // 打印当前请求的 id，便于调试，可根据需要保留或删除
    console.log(id);
    // 在 ARTICLES 数组中查找与传入 id 匹配的文章并返回
    return ARTICLES.find(article => article.id === parseInt(id));
  }
}