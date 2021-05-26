import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  id: number = 0;
  photos: any[] = [];
  success = Array(this.photos.length).fill(false);
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.id = parseInt(this.router.url.match(/[0-9]+/)![0]);
    this.dataService
      .getAlbumPhotos(this.id)
      .subscribe((data: any) => (this.photos = data));
  }

  deletePhoto = (i: number) => {
    this.dataService
      .deletePhoto(i)
      .subscribe(() => (this.success[i - 1] = true));
  };
}
