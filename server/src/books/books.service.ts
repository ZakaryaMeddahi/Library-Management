import { Body, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books = [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J.R.R Tolkien',
      adherentId: 123,
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
      author: 'J.R.R Tolkien',
      adherentId: 124,
    },
  ];

  createBook(@Body() createBookDto: CreateBookDto) {
    const id = Date.now();
    const newBook = { id, ...createBookDto };
    return newBook;
  }

  findAllBooks() {
    return this.books;
  }

  findSingleBook(id: number) {
    return this.books.find((book) => book.id === id);
  }

  updateBook(id: number, updateBookDto: UpdateBookDto) {
    const index = this.books.findIndex((book) => book.id === id);
    const updatedBook = { ...this.books[index], ...updateBookDto };
    this.books[index] = updatedBook;
    return updatedBook;
  }

  removeBook(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
    return this.books;
  }
}
