import { Component } from '@angular/core';
import { contractSampleData } from '../../core/models/contract-model'

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.scss']
})
export class ContractPageComponent {

  contractCards = contractSampleData;

  baseRoute = '/contract/';

  constructor() { }

  ngOnInit(): void {
  }

  // onContractSelected(contract: Contract){
  //   console.log('Contract selected: ', contract);
  // }

}
