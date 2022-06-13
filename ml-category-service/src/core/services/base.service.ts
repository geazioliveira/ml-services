import { Repository, UpdateResult } from 'typeorm'

export class BaseService<T extends Repository<M>, M> {
  protected relations: string[] = []
  private service: T

  constructor(service: T) {
    this.service = service
  }

  findAll(): Promise<M[]> {
    return this.service.find({
      relations: this.relations
    })
  }

  findOne(id: number): Promise<M> {
    return this.service.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.service.delete(id)
  }

  create(model): Promise<M> {
    return this.service.save(model)
  }

  update(id: number, model): Promise<UpdateResult> {
    return this.service.update(id, model)
  }
}
