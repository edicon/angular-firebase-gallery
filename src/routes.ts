import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image/image-detail.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
];

