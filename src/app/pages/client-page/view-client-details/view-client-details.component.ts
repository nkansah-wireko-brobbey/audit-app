import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientCreateResponse } from 'src/app/core/interfaces/client.interface';
import { ClientService } from 'src/app/services/client.service';
import { images } from 'src/app/core/constants/images';
import { UtitlityService } from 'src/app/utils/Utitlity.service';
import { T } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-view-client-details',
  templateUrl: './view-client-details.component.html',
  styleUrls: ['./view-client-details.component.scss']
})
export class ViewClientDetailsComponent implements OnInit {


  clientId:any;

  defaultImage = images;

  clientDetails: ClientCreateResponse;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private utilityService: UtitlityService
  ) { }

  ngOnInit(): void {
    console.log('View client details component');
      // Using paramMap observable
  this.route.paramMap.subscribe(params => {
    this.clientId = params.get('clientId');
    const id = params.get('clientId');
    console.log('Route param (using paramMap observable):', id);
    this.getClientDetails();
  });

  }

  private getClientDetails(): void {
    console.log('Get client details');
    try {
      this.clientService.getClientById(this.clientId).subscribe((response: any) => {

        this.clientDetails = this.formatClientData(response.body);
        console.log(this.clientDetails);
      });
  }catch (error) {
    console.log(error);
  }
}

formatClientData(client: ClientCreateResponse){
  const [min, max] = client.staffSize.split('_').slice(1).map(Number);
  // Generating the id and name properties
  const name = `${min}-${max}`

  const clientData: ClientCreateResponse =  {
      businessId: client.businessId,
      businessName: client.businessName,
      businessCategoryName: client.businessCategoryName,
      staffSize: name,
      email: client.email,
      phoneNumber: {
      countryCode: client.phoneNumber.countryCode,
      number: client.phoneNumber.number
      },
      imgSrc: this.defaultImage[0].path
    };


  return clientData;

}


  

}
