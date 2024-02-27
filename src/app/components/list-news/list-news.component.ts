import { Component, inject } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NewsService } from '../../services/news.service';
import { NewCardComponent } from '../new-card/new-card.component';

@Component({
  selector: 'app-list-news',
  standalone: true,
  imports: [NewCardComponent],
  templateUrl: './list-news.component.html',
  styleUrl: './list-news.component.css'
})
export class ListNewsComponent {
  arrNoticias: INoticia[] = [];

  newServices = inject(NewsService);

  ngOnInit() : void {
    this.arrNoticias = this.newServices.getAll()
  }
  
}
