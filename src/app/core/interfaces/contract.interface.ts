export interface Contract{
    title: string;
    clientName: string;
    clientId?: number;
    contractId?: number;
    imgSrc?: string;
}

export interface ContractCreateRequest{

    clientId: string;
    startDate: Date | string;
    endDate: Date | string;
    initiationMode: string;
    amountPaid: number;
    description: string;
    annualEngagementFrequency: any;
    documentRequests?: {
        name: string;
        file: File | null | any | ArrayBuffer;
    }[];
    file?: File | null | any | ArrayBuffer;
    fileName?: string;
}
export interface ContractResponse {
    amountPaid: {
      amount: number;
      currency: {
        alphabeticCode: string;
        createdBy: string;
        createdOn: string;
        id: number;
        lastModifiedBy: string;
        lastModifiedOn: string;
        minorUnit: number;
        name: string;
        numericCode: string;
        symbol: string | null;
        version: number;
      };
    };
    annualEngagementFrequency: number;
    documents: any; // Type as per your document structure
    endDate: string;
    initiationMode: string;
    previousContractId: any; // Type as per your previous contract ID structure
    startDate: string;
    imgSrc?: string;
    contractId: number | string;
    clientName: string;
  }
  