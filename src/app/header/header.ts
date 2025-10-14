import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  baixarArquivo(){
    const link = document.createElement('a');
    link.href = 'docs/curriculo.pdf'; 
    link.download = 'curriculo.pdf';         
    link.click();
  }
}
