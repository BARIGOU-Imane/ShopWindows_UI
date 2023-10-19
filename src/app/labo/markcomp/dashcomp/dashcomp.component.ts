import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CompService } from '../../services/comp.service';
import { Markcomp } from '../../markcomp';
import moment from "moment";
@Component({
  selector: 'app-dashcomp',
  templateUrl: './dashcomp.component.html',
  styleUrls: ['./dashcomp.component.css']
})
export class DashcompComponent implements OnInit {

  constructor(private router:Router, private authService :AuthService, private compService: CompService) { }
  campaigns : Markcomp[] = [];
  selectedCampaign : Markcomp| null=null;
  isCardVisible :boolean = false;
  showPopup: boolean = false;
  searchInput: string = '';
  searchCriteria: string = '';
  searchStartDate: string = '';
  searchEndDate: string = '';
  inputPlaceholder: string = '0Y 2M 0D';


  ngOnInit(): void {
    this.getAllForUser();
  }

  getAllForUser(): void {
    this.compService.getAllCompUser().subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getPlaceholder(): string {
    return this.searchCriteria === 'Period' ? this.inputPlaceholder : 'Search';
  }

  onSearchChange(): void {
    if (this.searchCriteria) {
      switch (this.searchCriteria.toLowerCase()) {
        case 'name':
          this.getByName(this.searchInput);
          break;
        case 'brand':
          this.getByBrand(this.searchInput);
          break;
        case 'type':
          this.getByType(this.searchInput);
          break;
        case 'season':
          this.getBySeason(this.searchInput);
          break;
        case 'date':
          this.searchDate();
          break;
        case 'period':
            this.getByPeriod(this.searchInput);
          break;
        default:
          this.getAllForUser(); // Show all campaigns if no valid criteria is selected
          break;
      }
    } else {
      this.getAllForUser(); // Show all campaigns if search input or criteria is empty
    }
  }

  searchDate():void{
    this.getByDate(this.searchStartDate,this.searchEndDate);
  }

  getByName(namecomp:string): void {
    this.compService.findByNameComp(namecomp).subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getByBrand(brand: string): void {
    this.compService.findByBrand(brand).subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getByType(typeComp: string): void {
    this.compService.findByTypeComp(typeComp).subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getBySeason(season: string): void {
    this.compService.findBySeason(season).subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getByPeriod(period: string): void {
    this.compService.findByPeriod(period).subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getByDate(start: string, end:string): void {
    this.compService.findByDate(start, end).subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showCard(campaign: Markcomp): void {
    this.isCardVisible = true;
    this.selectedCampaign = campaign;
    console.log(this.selectedCampaign);
  }


  
  hideCard() {
    this.isCardVisible = false;
  }

  deleteComp(id:number){
    this.compService.deleteComp(id).subscribe(
      (error) => {
        console.error(error);
      }
    );
    this.showPopup = false;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  
}
