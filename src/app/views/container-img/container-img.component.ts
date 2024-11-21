import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Interfaces } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-container-img',
  imports: [RouterLink],
  templateUrl: './container-img.component.html',
  styleUrl: './container-img.component.css'
})
export class ContainerImgComponent {
}