import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../models/galleryImage.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  images: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) {
  }

  ngOnChanges() {
  }
}
