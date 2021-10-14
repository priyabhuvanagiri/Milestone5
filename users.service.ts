import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Add imports

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<object> = [  
    {
      id: '12',
      name: 'Priya',
      role: 'Designer',
      pokemon: 'Blastoise'
    },
    {
      id: '31',
      name: 'Karthik',
      role: 'Developer',
      pokemon: 'Charizard'
    },
    {
      id: '66',
      name: 'Sai',
      role: 'Developer',
      pokemon: 'Venusaur'
    },
    {
      id: '14',
      name: 'Hema',
      role: 'Designer',
      pokemon: 'Yoshi'
    }
  ];

  constructor() { }
  all(): Observable<Array<object>> {
    return of(this.users);
  }
  all(): Observable<Array<object>> {
    return of(this.users);
  }
  
  findOne(id: string): Observable<object> {
    const user = this.users.find((u: any) => {
      return u.id === id;
    });
    return of(user);
  }
}