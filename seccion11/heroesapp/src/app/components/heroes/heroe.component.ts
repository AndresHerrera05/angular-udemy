import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
} )
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  };

  constructor( private _heroeService: HeroesService,
               private _router: Router ) {
  }

  ngOnInit() {
  }

  guardar() {
    console.log( this.heroe );
    this._heroeService.nuevoHeroe( this.heroe )
      .subscribe( data => {
          this._router.navigate( ['/heroe', data.name] );
        },
        error => console.error( error ) );
  }

}
