import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from './category.entity'
import { Repository } from 'typeorm'
import { BaseService } from '../../core/services/base.service'
import { CategoryDto } from './category.dto'

@Injectable()
export class CategoryService extends BaseService<Repository<Category>, Category> {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {
    super(categoryRepository)

    this.relations = ['categories']
  }

  async createMany(categoryId: number, categories: CategoryDto[]): Promise<Category> {
    const category = await this.findOne(categoryId)
    const categoriesEntities: Category[] = []

    for (const entity of categories) {
      categoriesEntities.push(await this.create(entity))
    }

    category.categories = categoriesEntities
    return this.categoryRepository.manager.save(category)
  }
}
