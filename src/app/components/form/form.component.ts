import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  id: number = 0;
  prevTitle: string = '';
  prevUrl: string = '';
  heading: 'Add Photo' | 'Edit Photo' = 'Add Photo';
  success = false;
  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.prevTitle = params.title;
      this.prevUrl = params.url;
    });
    if (this.prevTitle) {
      this.heading = 'Edit Photo';
      this.prevTitle.replace(/%20/g, ' ');
      this.prevUrl.replace(/%20/g, ' ');
      this.route.url.subscribe((url) => {
        this.id = parseInt(url.toString().match(/[0-9]+/)![0]);
      });
    } else {
      this.prevTitle = '';
      this.prevUrl = '';
    }
    this.form = this.fb.group({
      title: [this.prevTitle, Validators.required],
      url: [
        this.prevUrl,
        [
          Validators.required,
          Validators.pattern('(https|http)://.{2,256}.[a-z]{2,3}'),
        ],
      ],
    });
  }

  get title() {
    return this.form.get('title');
  }
  get url() {
    return this.form.get('url');
  }

  submitForm = () => {
    this.heading === 'Edit Photo'
      ? this.dataService
          .editPhoto(this.id, this.title?.value, this.url?.value)
          .subscribe(() => (this.success = true))
      : this.dataService
          .addPhoto(this.title?.value, this.url?.value)
          .subscribe(() => (this.success = true));
  };
}
