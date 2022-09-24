import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book-interface.component';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book>("https://localhost:44382/books");
  }
}