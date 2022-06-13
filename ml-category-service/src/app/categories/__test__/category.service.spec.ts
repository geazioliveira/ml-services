import { CategoryService } from '../category.service'
import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from '../category.entity'
import { typeOrmConfig } from '../../../core/config/typeOrm.config'

describe('CategoryService', () => {
  let categoryService: CategoryService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(typeOrmConfig), TypeOrmModule.forFeature([Category])],
      providers: [CategoryService]
    }).compile()

    categoryService = module.get<CategoryService>(CategoryService)
  })

  describe('findAll', () => {
    it('should return an array', async () => {
      const categories = await categoryService.findAll()
      expect(categories.length).toBeGreaterThanOrEqual(1)
    })
  })
})
