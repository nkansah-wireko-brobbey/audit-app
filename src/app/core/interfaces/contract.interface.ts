export interface Contract{
    title: string;
    clientName: string;
    clientId?: number;
    contractId?: number;
    imgSrc?: string;
}

export interface ContractCreateRequest{
    clientId: string;
    startDate: Date;
    endDate: Date;
    initiationMode: string;
    amount: number;
    description: string;
    annualEngagementFrequency: any;
    documentRequests: {
        name: string;
        file: File | null;
    }[];
}