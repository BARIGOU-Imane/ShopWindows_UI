import { Component, OnInit } from '@angular/core';
import { CompService } from '../../services/comp.service';
import { Markcomp } from '../../markcomp';

@Component({
  selector: 'app-addcomp',
  templateUrl: './addcomp.component.html',
  styleUrls: ['./addcomp.component.css']
})
export class AddcompComponent implements OnInit {
  form = {
    startDate: null,
    endDate: null,
    password: null,
    nameComp: null,
    typeComp: null,
    brand: null,
    season: null,
    photos: [] as string[],
  };
  imageFiles: File[] = []; 

  successMessage: string = '';

  constructor(private compService: CompService) {}

  ngOnInit(): void {}

  onSubmit() {
    
    this.compService.createCompagnes(this.form).subscribe(
      (response) => {
        this.successMessage = 'Marketing Campaign added successfully!';
      },
      (error) => {
        this.successMessage = 'failed, please try again';
        console.error(error);
      }
    );
  }


  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      for (let i = 0; i < inputElement.files.length; i++) {
        const file = inputElement.files[i];
        this.imageFiles.push(file);
        this.uploadImage(file);
      }
    }
  }

  uploadImage(file: File) {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const target = event.target;
      if (target && target.result && typeof target.result === 'string') {
        const imageUrl = target.result as string;
        this.form.photos.push(imageUrl);
        console.log( this.form.photos);
      }
    };
    reader.readAsDataURL(file);
  }
}


