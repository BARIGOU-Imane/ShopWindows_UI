import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { JwtResponse } from 'src/app/auth/components/login/jwt-response';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Markcomp } from 'src/app/labo/markcomp';
import { CompService } from 'src/app/labo/services/comp.service';

@Component({
  selector: 'app-pharma-dashboard',
  templateUrl: './pharma-dashboard.component.html',
  styleUrls: ['./pharma-dashboard.component.css']
})
export class PharmaDashboardComponent implements OnInit {
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
    this.getAll();
  }

  getAll(): void {
    this.compService.getAllComps().subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error: any) => {
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
          this.getAll(); // Show all campaigns if no valid criteria is selected
          break;
      }
    } else {
      this.getAll(); // Show all campaigns if search input or criteria is empty
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
  goToProfile() {
    this.router.navigate(['pharma/pharmaProfile']);
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}



