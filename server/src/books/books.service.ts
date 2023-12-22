import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Book } from './schemas/book.schema';

enum status {
  available = 'available',
  borrowed = 'borrowed',
}

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async findAllBooks(title: string) {
    try {
      if (title === '') {
        const books = await this.bookModel.find();
        return books;
      }
      const filteredBooks = await this.bookModel
        .find()
        .where('title')
        .regex(title);
      return filteredBooks;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findSingleBook(id: string) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }

      const book = await this.bookModel.findById(id);

      if (!book) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }

      return book;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createBook(createBookDto: CreateBookDto) {
    try {
      const newBook = { ...createBookDto, status: status.available };
      const bookDocument = new this.bookModel(newBook);
      await bookDocument.save();
      return bookDocument;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }

      const updatedBook = await this.bookModel.findByIdAndUpdate(
        id,
        { ...updateBookDto },
        { new: true },
      );

      if (!updatedBook) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }

      return updatedBook;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async removeBook(id: string) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException(`Invalid ID format: ${id}`);
      }

      const book = await this.bookModel.findById(id);

      if (!book) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }

      await book.deleteOne();
      const message = {
        message: `Book with ID ${id} has been deleted successfully`,
        success: 'OK',
        statusCode: 200,
      };
      return message;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
