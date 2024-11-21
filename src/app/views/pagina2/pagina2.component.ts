import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { ButtonComponent } from "../../components/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  imports: [CardsComponent,RouterLink,ButtonComponent],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component {
  itemlist= [
    {
    id: 1,
      titulo: "X-Vegan",
      descricao: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      image: "assets/images/burguer.png"
    },
    {
      id: 2,
      titulo: "X-Fitness",
      descricao: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      image: "assets/images/burguer.png"
    },
    {
      id: 3,
      titulo: "X-Infarto",
      descricao: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      image: "assets/images/burguer.png",
    }
  ]
  }


