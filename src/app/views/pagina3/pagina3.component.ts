import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  imports: [CardsComponent,ButtonComponent,RouterLink],
  templateUrl: './pagina3.component.html',
  styleUrl: './pagina3.component.css'
})
export class Pagina3Component {
  itemlist= [ 
    {id: 1,
      titulo: "Alface-Premium",
      descricao: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      image: "assets/images/burguer.png"
    },
    {
      id: 2,
      titulo: "X-Fruta",
      descricao: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      image: "assets/images/burguer.png"
    },
    {
      id: 3,
      titulo: "X-tomate",
      descricao: "Pão, Habúrguer, alface, tomate, queijo e maionese",
      image: "assets/images/burguer.png",
    }]
}
  
