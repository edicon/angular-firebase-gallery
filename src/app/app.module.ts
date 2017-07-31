import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

import { AuthenticationService } from './services/authentication.service';
import { ImageService } from './services/image.service';

import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    ImageDetailComponent,
    LoginComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
