import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractResponse } from 'src/app/core/interfaces/contract.interface';
import { ContractService } from 'src/app/services/contract.service';
import { UtitlityService } from 'src/app/utils/Utitlity.service';
import { images } from 'src/app/core/constants/images';
import { EngagementService } from 'src/app/services/engagement.service';
import { Engagement } from 'src/app/core/interfaces/engagment.interface';

@Component({
  selector: 'app-view-specific',
  templateUrl: './view-specific.component.html',
  styleUrls: ['./view-specific.component.scss']
})
export class ViewSpecificComponent implements OnInit {
  baseRoute = '/engagement/';

  allEngagements: Engagement[] = [];

  contractId: any;

  images = images;

  clientId:any;

  contractDetails: ContractResponse

  constructor(
    private route: ActivatedRoute,
    private utilityService: UtitlityService,
    private contractService: ContractService,
    private engagementService: EngagementService

    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clientId = params.get('contractId');
      console.log('Route param (using paramMap observable):', params.get('clientId'));
      console.log('Route param (using paramMap observable):', params.get('contractId'));
      this.getContractDetails();
    });

  }

  private getContractDetails(){
    console.log('Get contract details');
    try {
      this.contractService.getContractById(this.clientId).subscribe((response: any) => {

        this.contractDetails = this.addImage(response.body);
        this.contractId = this.contractDetails.contractId;
        console.log(this.contractDetails);
        if(this.contractId){
          this.getEngagementDetails();
        }
      });
  }catch (error) {
    console.log(error);
  }
}

addImage(response: ContractResponse){
  response.imgSrc = this.images[this.utilityService.getRandomNumber()][`path`];
  return response;
}

getEngagementDetails(){
  console.log('Get engagement details');
  try {
    console.log("engagementId: ", this.contractId);
    this.engagementService.getEngagementByContractId(this.contractId).subscribe((response: any) => {
      this.allEngagements = response.body;
      console.log(response)
      console.log(this.allEngagements);
    });
  } catch (error) {
    console.log(error);
  } 
}

}
