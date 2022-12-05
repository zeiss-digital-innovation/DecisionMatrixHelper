import { Status } from './StatusEnum';

export interface Alternative {
  id: string;
  name: string;
  description: string;
  assessments: Assessment[];
  score: number;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  status: Status;
  isExclusive: boolean;
}

export interface Assessment {
  id: string;
  feature: Feature;
  score: number;
  justification: string;
}
