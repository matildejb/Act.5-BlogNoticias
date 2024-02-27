import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  newsServices = inject(NewsService) 

getDataNews(formNews : any) : void {
  let newNoticia: INoticia = formNews.value;
  if (newNoticia.titulo !== "" && newNoticia.body !== "" && newNoticia.fecha !== "" && newNoticia.imagen !== ""){
      //Envio al servicio la nueva noticia
      let response = this.newsServices.insert(newNoticia);
      alert(response.msg)
      formNews.reset()
  }else {
     alert('Tienes que completar todos los campos');
  }
}
}
