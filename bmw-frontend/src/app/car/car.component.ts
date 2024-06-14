import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars = [];
  newCar = { model: '', year: 0, price: 0 };

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe(data => {
      this.cars = data;
    });
  }

  createCar() {
    this.carService.createCar(this.newCar).subscribe(() => {
      this.loadCars();
      this.newCar = { model: '', year: 0, price: 0 };
    });
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(() => {
      this.loadCars();
    });
  }
}
