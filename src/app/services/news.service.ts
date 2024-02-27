import { Injectable } from '@angular/core';
import { INoticia } from '../interfaces/inoticia.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private  arrNoticias: INoticia[] = [
   {
     titulo: 'Descubren nueva especie de mariposa en la selva amazónica',
     imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5a8355c-300e-4502-9431-a9c1059b36a3_16-9-discover-aspect-ratio_default_0.jpg',
     body: 'Investigadores de la Universidad Nacional de la Amazonía han anunciado el descubrimiento de una nueva especie de mariposa en lo profundo de la selva amazónica. La especie, bautizada como "Morpho amazonica", se distingue por sus alas de un azul brillante y un patrón de rayas únicas en la parte posterior. Este hallazgo representa un emocionante avance en la comprensión de la biodiversidad de la región amazónica y destaca la importancia de proteger estos ecosistemas únicos.',
     fecha: '2024/01/02'
   },
   {
     titulo: 'Científicos descubren un nuevo planeta habitable en la Vía Láctea',
     imagen: 'https://cdnb.20m.es/sites/112/2019/05/Blue-Planet-Space-Earth-Planet-All-Universe-Globe-11008.jpg',
     body: 'Un equipo de astrónomos anunció el descubrimiento de un nuevo planeta en la zona habitable de una estrella cercana a la Tierra. El planeta, llamado "Aurora", tiene condiciones atmosféricas y de temperatura que podrían ser adecuadas para la vida tal como la conocemos. Este emocionante hallazgo abre nuevas oportunidades para la búsqueda de vida extraterrestre y el estudio de planetas similares a la Tierra en nuestra galaxia.',
     fecha: '2020/08/12'
   }
  ]


  getAll(): INoticia[] {
    return this.arrNoticias; 
  }

  insert(miNoticia: INoticia): any {
    //comprobamos si la noticia existe en mi array NO FUNCIONA
   let posicion = this.arrNoticias.findIndex(noticia => noticia.titulo === miNoticia.titulo
    && noticia.fecha === miNoticia.fecha);

    if(posicion === -1){
      this.arrNoticias.push(miNoticia)
      return {status: true, msg: 'Noticia insertada correctamente' }
    } else {
      return {status: false, msg: 'Noticia duplicada' }
    }

    
  }
}
