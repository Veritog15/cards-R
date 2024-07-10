import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Catalogo de Zapatos';
  title1 = 'Catalogo de Carros';
  title2 = 'Catalogo de Joyeria';
  product:string = "Zapato Forms";
  product1:string = "Carro toyota";
  product2:string = "Anillo de diamante";
  description: string = "Son zapatos muy comodos para caminar por mucho tiempo, incluso para trabajar.";
  description1: string = "Un automovil muy clasico, con grandes velocidades.";
  description2: string = "Hermoso anillo de diamante a un beun precio.";
  urlImage: string = "/assets/imagen1.jpg";
  urlImage1: string = "/assets/imagen2.png";
  urlImage2: string = "/assets/imagen3.jpeg";
  price:number = 10
  price1:number = 18000
  price2:number = 2500

  showGreet(){
    alert("Hola");
  }
}
