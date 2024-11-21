import { Component, Input, } from '@angular/core';
import { Interfaces } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cards',
  imports: [CommonModule,RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input () item!:Interfaces
} 
        