import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newNoticia: INoticia = { titulo:"", imagen:"", body:"", fecha:"" }

   arrNoticias: INoticia[] = [
    {
      titulo: 'Descubren nueva especie de mariposa en la selva amazónica',
      imagen: 'https://pixabay.com/es/photos/fantas%C3%ADa-mariposas-champi%C3%B1ones-2049567/',
      body: 'Investigadores de la Universidad Nacional de la Amazonía han anunciado el descubrimiento de una nueva especie de mariposa en lo profundo de la selva amazónica. La especie, bautizada como "Morpho amazonica", se distingue por sus alas de un azul brillante y un patrón de rayas únicas en la parte posterior. Este hallazgo representa un emocionante avance en la comprensión de la biodiversidad de la región amazónica y destaca la importancia de proteger estos ecosistemas únicos.',
      fecha: '2024/01/02'
    },
    {
      titulo: 'Científicos descubren un nuevo planeta habitable en la Vía Láctea',
      imagen: 'https://pixabay.com/es/illustrations/ai-generado-astronauta-flores-8565635/',
      body: 'Un equipo de astrónomos anunció el descubrimiento de un nuevo planeta en la zona habitable de una estrella cercana a la Tierra. El planeta, llamado "Aurora", tiene condiciones atmosféricas y de temperatura que podrían ser adecuadas para la vida tal como la conocemos. Este emocionante hallazgo abre nuevas oportunidades para la búsqueda de vida extraterrestre y el estudio de planetas similares a la Tierra en nuestra galaxia.',
      fecha: '2020/08/12'
    }
   ]

   getNoticias(): string {
    let html = "";
    for(let noticia of this.arrNoticias){
      html += `
      <div class="news">
         <div class="content"> 
          <h3 class="titulo">${noticia.titulo}</h3>
          <p class="body">${noticia.body}</p>
          <p class="fecha">${noticia.fecha}</p>
         </div>
          <img src="${noticia.imagen}" alt="nuevaEspecie" title="mariposa amazónica" class="imagenes">
      </div>
      `
    }
    return html;
   }

   getDataNew(){
    if(this.newNoticia.titulo !== ""  && this.newNoticia.body !== "" && this.newNoticia.fecha !== "" && this.newNoticia.imagen !== ""){
      this.arrNoticias.push(this.newNoticia)
    }else{
      alert('no pueden existir campos vacios');
    }
    } 
}
