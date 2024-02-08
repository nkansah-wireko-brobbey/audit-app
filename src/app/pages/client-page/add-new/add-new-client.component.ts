import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clientCreateRequest } from '../../../core/interfaces/client.interface';
import { countries } from 'src/app/core/constants/countries';
import { Countries } from 'src/app/core/interfaces/country.interface';
import { ConfigService } from 'src/app/services/config/config.service';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'add-new-client-page',
  templateUrl: './add-new-client.component.html'
})
export class AddNewClientComponent implements OnInit {

  clientForm: FormGroup; // Declare FormGroup variable

  staffSizes: any[] = []; // Declare staffSizes array

  businessCategories: any[] = []

  countryList: Countries[]= countries; // Get country names from the country-list package

  constructor(
    private formBuilder: FormBuilder,
    private configService: ConfigService,
    private clientService: ClientService,
    private router: Router,
    @Inject(MatSnackBar) private snackBar: MatSnackBar
    ) {
  }

  ngOnInit(): void {
    // Initialize the form group and form controls
    this.clientForm = this.formBuilder.group({
      businessName: ['', Validators.required],
      businessCategory: ['', Validators.required],
      staffSize: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', Validators.required],
      phoneNumber: ['', [
        Validators.required, 
        Validators.pattern('^[0-9]*$')
      ]]
      
    });

    // Get configs
    this.getConfigs();
  }

  // Implement onSubmit method to handle form submission
  onSubmit() {
    console.log("Submit clicked");
    console.log(this.clientForm);
    if (this.clientForm.valid) {
      const formData: clientCreateRequest = this.clientForm.value;
      console.log(formData);
      // perform further actions 
      const data = this.formatFormData(formData);

      try {
        // You can perform further actions like sending data to server here
        this.clientService.createClient(data).subscribe((res: any) => {
          console.log(res);
          this.snackBar.open('Client created successfully', 'Close', {
            duration: 4000,
          });
          this.navigateToClientList();
        });
      } catch (error) {
        console.log(error);
      }

    } else {
      // Handle form validation errors
    }
  }

  // Get end points
  getConfigs(){
    
    this.configService.apiUrl.subscribe((res: any) => {
      console.log(res);
      this.destructureStaffSize(res);
      this.destructureBusinessCategory(res);
    });

  }

  private destructureStaffSize(response: any){
    const staffSizes = response.body.staffSizeRanges.map((size:any, index:any) => {
      // Extracting minimum and maximum values from the size range
      const [min, max] = size.split('_').slice(1).map(Number);
      // Generating the id and name properties
      const id = size;
      const name = `${min}-${max}`;
      return { id, name };
    });

    this.staffSizes = staffSizes;
    
    console.log(staffSizes);
  }

  private destructureBusinessCategory(response: any){
    const businessCategories = response.body.businessCategories.map((category:any, index:any) => {
      return { id: category.id, name: category.name };
    });

    this.businessCategories = businessCategories;
    
    console.log(businessCategories);
  }
  private formatFormData(formData: any){
    const formattedData = {
      businessName: formData.businessName,
      businessCategoryId: formData.businessCategory,
      staffSize: formData.staffSize,
      email: formData.email,
      phoneNumber: {
        number: formData.phoneNumber,
        countryCode: formData.countryCode
      }
    }
    return formattedData;
  }

  private navigateToClientList(){
    this.router.navigate(['/client']);
  }
}