import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-projects',
  imports: [CarouselModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  public products = [
    {
      name: 'Produto 1',
      image: '',
      price: '0.99'
    },
    {
      name: 'Produto 1',
      image: '',
      price: '0.99'
    },
    {
      name: 'Produto 1',
      image: '',
      price: '0.99'
    },
    {
      name: 'Produto 1',
      image: '',
      price: '0.99'
    },
    {
      name: 'Produto 1',
      image: '',
      price: '0.99'
    },
    {
      name: 'Produto 1',
      image: '',
      price: '0.99'
    },
  ];
}
