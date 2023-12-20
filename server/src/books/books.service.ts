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
      imgUrl: 'https://i.thenile.io/r1000/9780618645619.jpg?r=5eb588fe0f142',
      adherent: 'Zakarya',
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
      author: 'J.R.R Tolkien',
      imgUrl: 'https://i.thenile.io/r1000/9780618645619.jpg?r=5eb588fe0f142',
      adherent: 'Zakarya',
    },
  ];

  createBook(@Body() createBookDto: CreateBookDto) {
    const id = Date.now();
    const newBook = { id, ...createBookDto };
    this.books.push(newBook);
    return newBook;
  }

  findAllBooks() {
    return this.books;
  }

  findSingleBook(id: number) {
    return this.books.find((book) => book.id === id);
  }

  updateBook(id: number, updateBookDto: UpdateBookDto) {
    console.log('Book ID: ', id);
    console.log('Books: ', this.books);
    const index = this.books.findIndex((book) => book.id == id);
    console.log('Book Index: ', index);
    console.log('updateBookDto: ', updateBookDto);
    const updatedBook = { ...this.books[index], ...updateBookDto };
    console.log('This Book: ', this.books[index]);
    this.books[index] = updatedBook;
    console.log('Updated Book: ', updatedBook);
    return updatedBook;
  }

  removeBook(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
    return this.books;
  }
}
