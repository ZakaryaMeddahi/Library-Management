import { Body, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BooksService {
  private books = [
    {
      id: 1,
      title: 'Cracking the coding interview',
      author: 'Gayle Laakmann McDowell',
      imgUrl:
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg',
      adherent: 'Zakarya',
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      imgUrl:
        'https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF894,1000_QL80_.jpg',
      adherent: 'Sid Ahmed',
    },
    {
      id: 3,
      title: 'Cracking the coding interview',
      author: 'Gayle Laakmann McDowell',
      imgUrl:
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg',
      adherent: 'Alaa',
    },
  ];

  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  createBook(@Body() createBookDto: CreateBookDto) {
    const id = Date.now();
    const newBook = { id, ...createBookDto };
    this.books.push(newBook);
    return newBook;
  }

  findAllBooks(title: string) {
    console.log('Title: ', title);

    if (title === '') {
      return this.books;
    }
    const filteredBooks = this.books.filter((book) =>
      book.title.toLowerCase().match(title),
    );
    return filteredBooks;
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
