export interface client {
    id: number;
    imgSrc: string;
    imgPath?: string;
    title: string;
    desc?: string;
    createdDate?: Date;
}

export interface clientCreateRequest{
    
        businessName: string;
        businessCategoryId: String,
        staffSize: string,
        email: string,
        phoneNumber: {
            number: string,
            countryCode: string
        }
    
    
    }

export interface ClientCreateResponse {
    businessId: string;
    businessName: string;
    businessCategoryName: String,
    staffSize: string,
    email: string,
    phoneNumber: {
        number: string,
        countryCode: string

    }
    imgSrc?: string;
}
