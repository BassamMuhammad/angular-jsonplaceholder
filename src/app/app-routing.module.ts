import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { PhotosComponent } from './components/photos/photos.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: ':id/photos', component: PhotosComponent },
  { path: 'add-photo', component: FormComponent },
  { path: ':id/edit-photo', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
