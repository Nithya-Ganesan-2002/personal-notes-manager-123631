import { Routes } from '@angular/router';
import { HomeEmptyComponent } from './home-empty/home-empty.component';
import { EditorComponent } from './editor/editor.component';
import { SearchingEmptyComponent } from './searching-empty/searching-empty.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeEmptyComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeEmptyComponent,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: 'search-empty',
    component: SearchingEmptyComponent,
  }
];
