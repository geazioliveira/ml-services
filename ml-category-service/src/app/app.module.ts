import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryModule } from './categories/category.module'
import { typeOrmConfig } from '../core/config/typeOrm.config'

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CategoryModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
