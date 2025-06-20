import { Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookComponent } from './pages/book/book.component';
import { NotFoundComponent } from './pages/book/not-found/not-found.component';

export const routes: Routes = [{
	path: '',
	redirectTo: 'home',
	pathMatch: 'full'
},{
	path: 'home',
	component: BookListComponent
}, {
	path: 'book',
	children: [{
		path: '',
		component: BookComponent
	}, {
		path: ':id',
		component: BookComponent
	}]
}, {
	path: '**',
	component: NotFoundComponent
}];