import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from './category.entity'
import { Repository } from 'typeorm'
import { BaseService } from '../base/base.service'

@Injectable()
export class CategoryService extends BaseService<Repository<Category>, Category> {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {
    super(categoryRepository)
  }
}
