import {Alp} from './Alp';

export interface Summit {
  id: number;
  mainland: string;
  latitude: number;
  longitude: number;
  height: number;
  names: string[];
  alpinists: Alp[];
}
