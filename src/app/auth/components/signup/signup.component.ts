import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectedOptionValue !: string;
  selectedOptionPlaceholder !: string;

  // Autres méthodes et logique du composant
  ngOnInit() {
  }
  updateSelectedOption() {
    switch (this.selectedOptionValue) {
      case 'rsGoogleBusiness':
        this.selectedOptionPlaceholder = 'Google Business';
        break;
      case 'rsLinkedin':
        this.selectedOptionPlaceholder = 'LinkedIn';
        break;
      case 'rsFacebook':
        this.selectedOptionPlaceholder = 'Facebook';
        break;
      case 'rsInstagram':
        this.selectedOptionPlaceholder = 'Instagram';
        break;
      default:
        this.selectedOptionPlaceholder = '';
        break;
    }
  }
  constructor() { }



}
