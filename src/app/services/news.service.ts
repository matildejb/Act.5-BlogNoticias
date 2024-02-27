import { Injectable } from '@angular/core';
import { INoticia } from '../interfaces/inoticia.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private  arrNoticias: INoticia[] = [
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


  getAll(): INoticia[] {
    return this.arrNoticias; 
  }
}
