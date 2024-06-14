import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/car'; // Asegúrate de que la URL coincide con la de tu API NestJS

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCarById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createCar(car: any): Observable<any> {
    return this.http.post(this.apiUrl, car);
  }

  updateCar(id: number, car: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, car);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
