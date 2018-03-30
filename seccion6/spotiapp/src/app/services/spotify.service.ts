import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQCyfVO9aMpWSPs4ILGk3ypasu3YnGv-CPJ01XGrqEsoDL0SgdnyO2jl7YtTn6z8Eylfgl7oTSMB8OMyXeg';

  constructor( public http: HttpClient) {
    console.log( 'Servicio Spotify Listo' )
  }

  private getHeaders(): HttpHeaders{
    return new HttpHeaders({
      'authorization': `Bearer ${this.token}`
    });
  }

  getArtist( id:string ) {
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers});
  }

  getTop( id:string ) {
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers});
  }

  getArtistas( termino: string ) {
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();
    return this.http.get(url,{headers})
      .map( (res:any) => {
        this.artistas = res.artists.items;
        return this.artistas;
      } )
  }

}
