import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  constructor(private dataService: DataService) {}
  albums: any[] = [];
  ngOnInit(): void {
    this.dataService.getAlbums().subscribe((data: any) => {
      this.albums = data;
    });
  }

  openAlbum = () => {};
}
