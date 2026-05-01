import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { CreateExampleDto } from './dto/create-example.dto';
import { ExampleService } from './example.service';

@Controller('examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  findAll(@Query() query: PaginationQueryDto) {
    return this.exampleService.findAll(query);
  }

  @Post()
  create(@Body() body: CreateExampleDto) {
    return this.exampleService.create(body);
  }
}
