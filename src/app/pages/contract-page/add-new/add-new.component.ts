import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config/config.service';
import { engagementFrequency } from 'src/app/core/constants/engagementFrequency';
import { ClientService } from 'src/app/services/client.service';
import { ClientCreateResponse } from 'src/app/core/interfaces/client.interface';
import { ContractCreateRequest } from 'src/app/core/interfaces/contract.interface';
import { ContractService } from 'src/app/services/contract.service';
import { catchError, finalize, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewContractComponent implements OnInit{
  minDate = new Date();

  submitButtonStatus: boolean = true;

  createContractRequest: ContractCreateRequest;


  fileName = '';

  initiationModes:any;

  engagementFrequency = engagementFrequency;

  selectedFile: File | null = null;

  clientsData: ClientCreateResponse[] = [];

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile)
      this.fileName = this.selectedFile.name.length > 10 ? 
                  this.selectedFile.name.substring(0, 10) + '...' : 
                  this.selectedFile.name;

    console.log( event.target.files);
    console.log(this.selectedFile);
  }

  ngOnInit(): void {
        console.log('Add new contract component');
        this.getConfig();
        this.getClients();
  }

  contractFrom: FormGroup;

  // private 

  constructor(
    private formBuilder: FormBuilder,
    private configService: ConfigService,
    private clientService: ClientService,
    private contractService: ContractService,
    private router: Router,
    @Inject(MatSnackBar) private _snackBar: MatSnackBar
  ) {

    this.contractFrom = this.formBuilder.group({
      startDate: ['', {
        validators: [Validators.required, Validators.min(new Date().getDate())],
        updateOn: 'blur' // Trigger validation on blur (when the field loses focus)
      }],
      endDate: ['', Validators.required],
      initiationMode: ['', Validators.required],
      amount: ['', {
        validators: [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)],
        updateOn: 'blur' // Trigger validation on blur (when the field loses focus)
      }],
      description: ['', Validators.required],
      frequency: ['', Validators.required],
      clientId: ['', Validators.required],
      
    });
  }

  

 // Implement onSubmit method to handle form submission
 onSubmit() {
  console.log('submit clicked');
  console.log(this.contractFrom);
  if (this.contractFrom.valid) {
    this.submitButtonStatus = false;

    let formData = new FormData();


    const formDataUnformated = this.contractFrom.value;
    console.log(formDataUnformated);

    const formDataFormated:any = this.formatContractData(formDataUnformated);

      // Append form field values to formData
      Object.keys(formDataFormated).forEach(key => {
        formData.append(key, formDataFormated[key]);
        console.log(key, formDataFormated[key]);
      });

      if (this.selectedFile)
        formData.append('file', this.selectedFile);

      console.log(formData);

    this.contractService.createContract(formData).pipe(
      catchError(error => {
        console.log('An error occurred:', error);
        this._snackBar.open('An error occurred', 'Close', {
          duration: 4000,
        });
        return throwError(()=> new Error('An error occurred')); 
      }),
      finalize(() => {
        this.submitButtonStatus = true;
      })
    ).subscribe((res: any) => {
      // console.log(res);
      this._snackBar.open('Contract created successfully', 'Close', {
        duration: 4000,
      });

      this.router.navigate(['/contract']);
    });

  } else {
    // Handle form validation errors
  }
}



  // 
  getConfig() {
    this.configService.apiUrl.subscribe((res: any) => {
      console.log(res);
      this.initiationModes = res.body.initiationModes;
     
    });  
  }

  getClients(){
    this.clientService.getCLients().subscribe((res: any) => {
      console.log(res);
      this.clientsData = this.formatClientData(res.body);
    });
  }
  private formatClientData(response: any){

  
    const clients = response.map((client: ClientCreateResponse) => {
      return {
        businessId: client.businessId,
        businessName: client.businessName,
        businessCategory: client.businessCategoryName,
        staffSize: client.staffSize,
        email: client.email,
        countryCode: client.phoneNumber.countryCode,
        phoneNumber: client.phoneNumber.number,
      };
    })
  
    console.log(clients)
    return clients;
  }

  clickedSubmit(){

  }

  formatContractData(request: any) {
    let tempFile = new FormData();
    if (this.selectedFile)
    tempFile.set('file', this.selectedFile);

    const documentRequests = [{
      name: request.description,
      file: tempFile // Initially set to null
    }];

    // documentRequests[0].file = this.selectedFile ?  new FormData().set('file', this.selectedFile)  : null;

      const contractData: ContractCreateRequest = {
        clientId: request.clientId,
        startDate: this.formatDate(request.startDate),
        endDate: this.formatDate(request.endDate),
        initiationMode: request.initiationMode,
        amountPaid: request.amount,
        description: request.description,
        annualEngagementFrequency: request.frequency,
        documentRequests: documentRequests,
        fileName: request.description
      };

      console.log("File");
    console.log(this.selectedFile);
    console.log(documentRequests);
    console.log(contractData.documentRequests?.[0]?.file);
    

    return contractData;
  }

  private formatDate(dateTimeString:any){
    const dateTime = new Date(dateTimeString);

// Extract the date components (year, month, day)
const year = dateTime.getFullYear();
const month = dateTime.getMonth() + 1; // Note: getMonth() returns a zero-based index, so add 1 to get the actual month
const day = dateTime.getDate();

// Format the date
const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;


return formattedDate;
 }

}
