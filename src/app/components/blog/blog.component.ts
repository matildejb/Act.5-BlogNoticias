import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormComponent } from '../form/form.component';
import { ListNewsComponent } from '../list-news/list-news.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormComponent, ListNewsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  /*newNoticia: INoticia = { titulo:"", imagen:"", body:"", fecha:"" }*/


   /*getDataNew(){
    if(this.newNoticia.titulo !== ""  && this.newNoticia.body !== "" && this.newNoticia.fecha !== "" && this.newNoticia.imagen !== ""){
      this.arrNoticias.push(this.newNoticia)
    }else{
      alert('no pueden existir campos vacios');
    }
    } */
}
