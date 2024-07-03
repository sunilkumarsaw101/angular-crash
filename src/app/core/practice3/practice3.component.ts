import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css'],
})
export class Practice3Component implements OnInit {
  bookSongListForm: FormGroup;
  bookList: any = [];
  songList: any = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookSongListForm = this.fb.group({
      name: [''],
      genre: [''],
      creator: [''],
      bookSong: [''],
    });
  }

  submit() {
    let formData = this.bookSongListForm.value;
    if (formData.bookSong == 'book') {
      //  console.log('book');
      this.bookList.push(formData);
    } else {
      // console.log('song');
      this.songList.push(formData);
    }

    this.bookSongListForm.reset();
  }

  deleteBook(name: any) {
    this.bookList = this.bookList.filter((item: any) => {
      if (item.name !== name) {
        return item;
      }
    });
  }
}
