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
  export interface EngagementBudget {
    id: number;
    travelAndAccommodation: number;
    insurance: number;
    softwareLicence: number;
  }

  export interface EngagementTeamResponse {
    leadAuditor: StaffResponse;
    juniorAuditors: StaffResponse[];
    assistants: StaffResponse[];
  }

  export interface StaffResponse {
    firstName: string;
    lastName: string;
    email: string;
  }

  export interface EngagementBudgetResponse {
   
      id: number;
      travelAndAccommodation: number;
      insurance: number;
      softwareLicence: number;
    
  }
  
  
  