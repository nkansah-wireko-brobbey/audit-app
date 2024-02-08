import { Component } from '@angular/core';
import { contractSampleData } from '../../core/models/contract-model'
import { ContractService } from 'src/app/services/contract.service';
import { ContractResponse } from 'src/app/core/interfaces/contract.interface';
import { images } from 'src/app/core/constants/images';
import { UtitlityService } from 'src/app/utils/Utitlity.service';


@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.scss']
})
export class ContractPageComponent {

  contractImages = images;

  contractCards: ContractResponse[];

  baseRoute = '/contract/';

  constructor(
    private contractService: ContractService,
    private utilityService: UtitlityService
  ) { }

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts(){
    this.contractService.getAllContracts().subscribe(
      (data: any) => {
        console.log('Contracts: ', data);
        
        this.contractCards = data.body;
        this.addImages();
      }
    )
  }
  // onContractSelected(contract: Contract){
  //   console.log('Contract selected: ', contract);
  // }

  private addImages(){
    this.contractCards.forEach(contract => {
      contract.imgSrc = this.contractImages[this.utilityService.getRandomNumber()][`path`];
    });
  }

  

}
