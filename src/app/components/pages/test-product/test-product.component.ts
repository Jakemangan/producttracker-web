import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-test-product',
  templateUrl: './test-product.component.html',
  styleUrls: ['./test-product.component.scss']
})
export class TestProductComponent implements OnInit {

  randomPrice: number;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Test product - Random price")
    this.randomPrice = Math.floor((Math.random() * 100));
  }

}
