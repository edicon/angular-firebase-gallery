import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GalleryImage } from '../models/galleryImage.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import 'firebase/storage';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
    private uid: string;
    visibleImages = [];

    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
        this.afAuth.authState.subscribe(auth => {
            if (auth !== undefined && auth !== null) {
                this.uid = auth.uid;
            }
        });
    }

    getImages(): Observable<GalleryImage[]> {
        return this.db.list('uploads');
    }

    getImage(key: string) {
        const imageUrl = firebase.database()
        .ref('uploads/' + key)
        .once('value')
        .then((snap) => snap.val());
    }
}
