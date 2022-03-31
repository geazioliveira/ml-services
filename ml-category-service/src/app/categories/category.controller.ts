import { Body, Controller, HttpCode, Param, Patch, Post, ValidationPipe } from '@nestjs/common'
import { CategoryService } from './category.service'
import { Category } from './category.entity'
import { CategoryDto } from './category.dto'
import { UpdateResult } from 'typeorm'
import { BaseController } from '../../base/base.controller'

@Controller('/category')
export class CategoryController extends BaseController<CategoryService, Category> {
  constructor(private categoryService: CategoryService) {
    super(categoryService)
  }

  @Post()
  @HttpCode(201)
  create(@Body(new ValidationPipe()) category: CategoryDto): Promise<Category> {
    return this.categoryService.create(category)
  }

  @Patch(':id')
  update(@Param() params, @Body(new ValidationPipe()) category: CategoryDto): Promise<UpdateResult> {
    return this.categoryService.update(params.id, category)
  }
}
