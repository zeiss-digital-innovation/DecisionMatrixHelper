import { Status } from './StatusEnum';

export interface Alternative {
  id: string;
  name: string;
  description: string;
  features: Feature[];
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  status: Status;
  isExclusive: boolean;
}
