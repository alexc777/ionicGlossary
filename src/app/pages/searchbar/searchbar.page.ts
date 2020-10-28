import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getAlbumes().subscribe( (albumes: any) => {
      this.albumes = albumes;
    });
  }

  buscar(event: any) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
