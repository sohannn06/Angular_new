export interface Course {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    capacity: number;
    enrolled: number;
  }