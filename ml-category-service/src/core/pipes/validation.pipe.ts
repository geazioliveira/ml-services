import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToInstance } from 'class-transformer'

@Injectable()
export class ValidationPipe implements PipeTransform {
  static toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object]
    return !types.includes(metatype)
  }

  async transform(value, { metatype }: ArgumentMetadata) {
    if (!metatype || !ValidationPipe.toValidate(metatype)) {
      return value
    }
    const object = plainToInstance(metatype, value)
    const errors = await validate(object)
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed')
    }
    return value
  }
}
