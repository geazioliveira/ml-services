import { Delete, Get, HttpCode, Param } from '@nestjs/common'
import { BaseService } from '../services/base.service'

export class BaseController<T extends BaseService<any, any>, M> {
  private service: T

  constructor(service: T) {
    this.service = service
  }

  @Get()
  findAll(): Promise<M[] | M> {
    return this.service.findAll()
  }

  @Get(':id')
  findOne(@Param() params): Promise<M> {
    return this.service.findOne(params.id)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() params): Promise<void> {
    return this.service.remove(params.id)
  }
}
