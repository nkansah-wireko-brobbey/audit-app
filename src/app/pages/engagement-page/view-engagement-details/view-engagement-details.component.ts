import { Component, OnInit } from '@angular/core';
import { EngagementService } from 'src/app/services/engagement.service';
import { ActivatedRoute } from '@angular/router';
import { Engagement } from 'src/app/core/interfaces/engagment.interface';
@Component({
  selector: 'app-view-engagement-details',
  templateUrl: './view-engagement-details.component.html',
  styleUrls: ['./view-engagement-details.component.scss']
})
export class ViewEngagementDetailsComponent implements OnInit {
  engagmentDetails: Engagement;

  engagementId: any;

  constructor(
    private engagementService: EngagementService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('View engagement details component');
    this.route.paramMap.subscribe(params => {
      this.engagementId = params.get('engagementId');
      console.log('Route param (using paramMap observable):', this.engagementId);
      this.getEngagementDetails();

    })


    // this.getEngagementDetails();
  }

  // private getEngagementDetails(): void {
     getEngagementDetails(): void {
    console.log('Get engagement details');
    try {
      console.log("engagementId: ", this.engagementId);
      this.engagementService.getEngagementById(this.engagementId).subscribe((response: any) => {
        this.engagmentDetails = response.body;
        console.log(this.engagmentDetails);
      });
    } catch (error) {
      console.log(error);
    } 
  }

}
