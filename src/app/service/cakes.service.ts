import { Message } from './../model/message.model';
import { User } from './../model/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cake } from '../model/cake.model';
import { Slide } from '../model/slide';

const baseURL = 'http://localhost:3000/api/cakes';

const ingURL = 'http://localhost:3000/api/ingredients';

const slidURL = 'http://localhost:3000/api/slideshow';

const userURL = 'http://localhost:3000/api/user';

const messURL = 'http://localhost:3000/api/messages';

@Injectable({
  providedIn: 'root',
})
export class CakesService {
  constructor(private http: HttpClient) {}

  getCakes(params?: any): Observable<Cake[]> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('filter', (params.filter && JSON.stringify(params.filter)) || '')
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || ''),
      };
    }

    return this.http.get(`${baseURL}`, queryParams).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Cake(elem))) || [];
      })
    );
  }

  getCakesById(cakeId: number): Observable<Cake> {
    return this.http.get(`${baseURL}/${cakeId}`).pipe(
      map((elem: any) => {
        return new Cake(elem);
      })
    );
  }

  getIngridients(): Observable<string[]> {
    return this.http.get(`${ingURL}`).pipe(
      map((response) => {
        return response as string[];
      })
    );
  }

  getSlide(): Observable<Slide[]> {
    return this.http.get(`${slidURL}`).pipe(
      map((elem: any) => {
        return elem && elem.map((data: any) => new Slide(data));
      })
    );
  }

  getUser(): Observable<User[]> {
    return this.http.get(`${userURL}`).pipe(
      map((elem: any) => {
        return elem && elem.map((data: any) => new User(data));
      })
    );
  }

  post(user: User) {
    return this.http.post(`${messURL}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get(`${userURL}/${id}`).pipe(
      map((data) => {
        return new User(data);
      })
    );
  }

  // ------------FINISH ------------------

  update(user: User): Observable<any> {
    return this.http.put(`${baseURL}/${user._id}`, user).pipe(
      map((data: any) => {
        return new User(data);
      })
    );
  }
}
