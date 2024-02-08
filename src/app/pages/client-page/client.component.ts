import { Component, OnInit } from '@angular/core';

import { clientcards } from '../../core/models/client-model'
import { ClientService } from '../../services/client.service';
import { ClientCreateResponse } from 'src/app/core/interfaces/client.interface';
import { images } from 'src/app/core/constants/images';
// import { ClientCard } from './client-card/client-card.component';

@Component({
  selector: 'app-sample-page',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  defaultImages = images;

  clientCards:ClientCreateResponse[];

  baseRoute = '/client/';

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.loadAllClients();
  }

  loadAllClients():void {

    try {
      this.clientService.getCLients().subscribe((response: any) => {
        console.log(response);
        this.clientCards = this.formatClientData(response.body);
      });
    }catch (error) {
      console.log(error);
    }

  }

private formatClientData(response: any){

  console.log(this.defaultImages)

  const clients = response.map((client: ClientCreateResponse) => {
    const genNumber = this.getRandomNumber();
    console.log(genNumber)
    return {
      businessId: client.businessId,
      businessName: client.businessName,
      businessCategory: client.businessCategoryName,
      staffSize: client.staffSize,
      email: client.email,
      countryCode: client.phoneNumber.countryCode,
      phoneNumber: client.phoneNumber.number,
      imgSrc: this.defaultImages[genNumber]['path']
    };
  })

  console.log(clients)
  return clients;
}

// Generate random numbers between 0 and 1  
private getRandomNumber(): number {
  return Math.floor(Math.random() * 2) + 1;
}



}
