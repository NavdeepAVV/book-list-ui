import { Component, OnInit } from '@angular/core';
import { BookService } from './book-service.component';
import { Book } from './book-interface.component';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.style.scss']
})
export class BookListComponent implements OnInit {
    books: Book;
    searchText: any;
    constructor(private bookService: BookService) { }    
    ngOnInit(): void {
        this.bookService.getBooks()
            .subscribe((data: Book) => 
            this.books = data
            //console.log(data.items)
            );
    }
}