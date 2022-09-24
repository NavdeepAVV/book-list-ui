import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './books/book-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'
import { CoursesComponent } from './courses/courses.component';
import { SearchFilterPipe } from './search-filter.pipe';

const routes: Routes = [
  {path: 'books' , component: BookListComponent},
  {path: 'courses' , component: CoursesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CoursesComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService, SearchFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
