import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ImageService } from './image/shared/image.service';
import { ImageFilterPipe } from './image/shared/filter.pipe';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from '../routes';
import { LoginComponent } from './login/login/login.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageComponent,
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
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
