import { Component, Input, OnInit } from '@angular/core';
import { Part } from 'src/app/models/part.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input()
  item: Part;

  constructor() { }

  ngOnInit(): void {
  }

}
