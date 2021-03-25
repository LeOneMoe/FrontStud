import {Summit} from './modules/Summit';

export class SummitMockService {
  data: Summit[] = [
    {
      id: 1,
      mainland: 'Europe',
      latitude: 100,
      longitude: 200,
      height: 300,
      names: ['Name1', 'Name2', 'Name3'],
      alpinists: [{
        id: 1,
        first_name: 'Mike',
        last_name: 'Sazonov',
        middle_name: 'Sergeevich',
        ascent_date: '2021-03-21'
      }]
    },
    {
      id: 2,
      mainland: 'Europe',
      latitude: 200,
      longitude: 300,
      height: 400,
      names: ['Name4', 'Name5', 'Name6'],
      alpinists: [{
        id: 2,
        first_name: 'Mike',
        last_name: 'Severilov',
        middle_name: 'Sergeevich',
        ascent_date: '2021-03-21'
      }]
    }
  ];
}
