import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractResponse } from 'src/app/core/interfaces/contract.interface';
import { ContractService } from 'src/app/services/contract.service';
import { UtitlityService } from 'src/app/utils/Utitlity.service';
import { images } from 'src/app/core/constants/images';

@Component({
  selector: 'app-view-specific',
  templateUrl: './view-specific.component.html',
  styleUrls: ['./view-specific.component.scss']
})
export class ViewSpecificComponent implements OnInit {

  images = images;

  clientId:any;

  contractDetails: ContractResponse

  constructor(
    private route: ActivatedRoute,
    private utilityService: UtitlityService,
    private contractService: ContractService

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
        console.log(this.contractDetails);
      });
  }catch (error) {
    console.log(error);
  }
}

addImage(response: ContractResponse){
  response.imgSrc = this.images[this.utilityService.getRandomNumber()][`path`];
  return response;
}

}
