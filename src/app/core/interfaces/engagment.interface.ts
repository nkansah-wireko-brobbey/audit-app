export interface engagmentDetails {
    id: number;
    name: string;
    engagementType: string;
    proposedStartDate: string;
    proposedEndDate: string;
    actualStartDate: string;
    actualEndDate: string;
    scope: string;
    deliverable: string;
    status: string;
    businessCategoryId: number;
  }
 export interface Engagement {
    id: number;
    name: string;
    engagementType: string;
    proposedStartDate: string;
    proposedEndDate: string | null;
    actualStartDate: string | null;
    actualEndDate: string | null;
    scope: string;
    deliverable: string;
    status: string;
    businessCategoryId: number;
  }
  