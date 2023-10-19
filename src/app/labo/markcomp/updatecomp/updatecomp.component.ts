import { Component, OnInit } from '@angular/core';
import { CompService } from '../../services/comp.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Markcomp } from '../../markcomp';

@Component({
  selector: 'app-updatecomp',
  templateUrl: './updatecomp.component.html',
  styleUrls: ['./updatecomp.component.css']
})
export class UpdatecompComponent implements OnInit {
  campaignId!: number;
  campaign: Markcomp | null = null;
  successMessage: string = '';

  constructor(private route: ActivatedRoute, private compService: CompService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.campaignId = params['id'];
      this.CampaignData(this.campaignId);
    });
  }

  CampaignData(id: number): void {
    this.compService.getCompagneById(id).subscribe(
      (campaign) => {
        this.campaign = campaign;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit(): void {
    if (this.campaign) {
      this.compService.updateComp(this.campaignId, this.campaign).subscribe(
        (response) => {
          this.successMessage = 'Campaign updated successfully!';
        },
        (error) => {
          console.error(error);
          this.successMessage = 'Failed to update the campaign.';
        }
      );
    }
  }

}
