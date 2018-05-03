import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
} )
export class HeroeComponent implements OnInit {

  private heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  };

  nuevo:boolean = false;
  id: string;

  constructor( private _heroeService: HeroesService,
               private _router: Router,
               private route: ActivatedRoute ) {

    this.route.params.subscribe( params => {
      console.log(params);
      this.id = params['id'];

      if( this.id !== "nuevo" ){
        this._heroeService.getHeroe( this.id )
          .subscribe( heroe => this.heroe = heroe );
      }

    } )

  }

  ngOnInit() {
  }

  guardar() {
    console.log( this.heroe );

    if( this.id == "nuevo" ){
      this._heroeService.nuevoHeroe( this.heroe )
        .subscribe( data => {
            this._router.navigate( ['/heroe', data.name] );
          },
          error => console.error( error ) );
    } else {
      this._heroeService.actualizarHeroe( this.heroe, this.id )
        .subscribe( data => {
            // this._router.navigate( ['/heroe', data.name] );
            console.log( data )
          },
          error => console.error( error ) );
    }
  }

  agregarNuevo(forma:NgForm){

    this._router.navigate(['/heroe','nuevo']);
    forma.reset({
      casa:"Marvel"
    });

  }

}
