import { Component, OnInit } from '@angular/core';
import { Engagement } from 'src/app/core/interfaces/engagment.interface';
import { EngagementService } from 'src/app/services/engagement.service';

@Component({
  selector: 'app-engagement-page',
  templateUrl: './engagement-page.component.html',
  styleUrls: ['./engagement-page.component.scss']
})
export class EngagementPageComponent implements OnInit {

  allEngagements: Engagement[] = [];

  constructor(private engagementService: EngagementService) { }

  ngOnInit(): void {
    console.log('Engagement page component');
    this.loadEngagements();
  }

  loadEngagements(){
    this.engagementService.getAllEngagements().subscribe(
      (data: any) => {
        console.log('Engagements: ', data);
        this.allEngagements = data.body;
      }
    )
  }
  
  // onContractSelected(contract: Contract){
  //   console.log('Contract selected: ', contract);
  // }


}
