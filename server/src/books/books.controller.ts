import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto) {
    return await this.booksService.createBook(createBookDto);
  }

  @Get()
  async getAllBooks(@Query('title') title: string) {
    return await this.booksService.findAllBooks(title);
  }

  @Get(':id')
  async getSingleBook(@Param('id') id: string) {
    return await this.booksService.findSingleBook(id);
  }

  @Patch(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return await this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  async removeBook(@Param('id') id: string) {
    return await this.booksService.removeBook(id);
  }
}
