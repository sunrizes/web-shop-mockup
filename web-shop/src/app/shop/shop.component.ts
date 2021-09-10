import { Component, OnInit } from '@angular/core';
import { Part } from '../models/part.model';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  partList: Part[];
  carList: string[] = ["Alfa Romeo", "Audi", "BMW", "Chevrolet", "Citroen", "Dacia", "Daewoo", "Daihatsu",
  "Fiat", "Ford", "Honda", "Hyundai", "Infiniti", "Kia", "Lada", "Lancia", "Land Rover", "Mazda", "Mercedes Benz",
  "Mini", "Mitsubishi", "Nissan", "Opel", "Peugeot", "Renault", "Saab", "Seat", "Skoda", "Smart", "Subaru", "Suzuki",
  "Tata", "Toyota", "Volkswagen", "Volvo", "Zastava"];

  constructor(private service: ShopService) { }

  ngOnInit(): void {
    this.getParts();
  }

  getPartsSelect(make:string): void {
    this.getParts(make);
  }

  getParts(make?:string): void {
    this.service.getAllParts(make).subscribe(
      data => {
        this.partList = data;
        console.log(this.partList);
      },
      error => {
        console.log(error);
      }
    )
  }

}
