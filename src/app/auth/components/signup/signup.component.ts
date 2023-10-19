import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form={
      username: null,
      pharmaLaboName:null,
      email: null,
      password: null,
      persoGln: null,
      pharmaLaboGln: null,
      adresseCanton:  null,
      pharmaLaboAdresseCanton:  null,
      rsGoogleBusiness:  null,
      pharmaLaboRsGoogleBusiness:  null,
      rsLinkedin:  null,
      pharmaLaboRsLinkedin:  null,
      rsFacebook: null,
      pharmaLaboRsFacebook: null,
      rsInstagram: null,
      pharmaLaboRsInstagram: null,
      numeroTelephone: null,
      pharmaLaboNumeroTelephone: null,
      pharmaLaboGroupement: null,
      pharmaLaboHoraireOuverture: null,
      role:null
  }
  showFirstPart = true;
  constructor(private http: HttpClient,private authService: AuthService) { }
  
    fillSecondPartFields(pharmaLabo: any): void {
      this.form.pharmaLaboName = pharmaLabo.pharmaLaboName;
      this.form.pharmaLaboAdresseCanton = pharmaLabo.pharmaLaboAdresseCanton;
      this.form.pharmaLaboRsGoogleBusiness = pharmaLabo.pharmaLaboRsGoogleBusiness;
      this.form.pharmaLaboRsLinkedin = pharmaLabo.pharmaLaboRsLinkedin;
      this.form.pharmaLaboRsFacebook = pharmaLabo.pharmaLaboRsFacebook;
      this.form.pharmaLaboRsInstagram = pharmaLabo.pharmaLaboRsInstagram;
      this.form.pharmaLaboNumeroTelephone = pharmaLabo.pharmaLaboNumeroTelephone;
      this.form.pharmaLaboGroupement = pharmaLabo.pharmaLaboGroupement;
      this.form.pharmaLaboHoraireOuverture = pharmaLabo.pharmaLaboHoraireOuverture;
    }
  
  showSecondPart() :void{
    //TODO: ici je dois récupérer les infos liées à labo/pharma
    this.showFirstPart = false;
    if (!this.form.pharmaLaboGln) {
      return;
    }
    this.authService.showSecondPart(this.form.pharmaLaboGln).subscribe(
      (response: { exists: any; pharmaLabo: any }) => {
        if (response.exists) {
          this.fillSecondPartFields(response.pharmaLabo);
        } else {
          this.showFirstPart = false;
        }
  });
}

  showFirstPartAgain(): void {
    this.showFirstPart = true;
  }

  successMessage:string='';
  ngOnInit() {
  }



  onSubmit(): void{
    console.log(this.form)
    this.authService.signUp(this.form).subscribe({
          next: () => {
            this.successMessage = 'User successfully registered!';
           },
           error: () => {
            this.successMessage = 'Registration failed, please try again';
           }
        });
  }
  


}
