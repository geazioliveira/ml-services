import { IsString } from 'class-validator'

export class CategoryDto {
  id?: number

  @IsString()
  name: string

  @IsString()
  description: string

  createdAt?: Date
  updateAt?: Date
}
