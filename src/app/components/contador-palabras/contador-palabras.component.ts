import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-palabras',
  templateUrl: './contador-palabras.component.html',
  styleUrls: ['./contador-palabras.component.css']
})
export class ContadorPalabrasComponent {
  texto: string = '';
  contador: number = 0;

  contarPalabras() {
    if (this.texto.trim() === '') {
      this.contador = 0;
    } else {
      const palabras = this.texto.trim().split(' ');
      this.contador = palabras.length;
    }
    
  }

  copiarTexto() {
    // Crea un elemento de entrada de texto temporal
    const inputElement = document.createElement('input');
    // Establece el valor del elemento de entrada como el texto que deseas copiar
    inputElement.value = this.texto;
    // Agrega el elemento de entrada temporal al DOM
    document.body.appendChild(inputElement);
    // Selecciona el contenido del elemento de entrada
    inputElement.select();
    // Intenta copiar el contenido al portapapeles
    document.execCommand('copy');
    // Remueve el elemento de entrada temporal del DOM
    document.body.removeChild(inputElement);
  }
}
