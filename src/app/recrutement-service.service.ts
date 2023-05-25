import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from 'src/modeles/offer';

@Injectable({
  providedIn: 'root'
})
export class RecrutementServiceService {


  constructor(private http: HttpClient) { }
  
  
  fetchOffers() {
    return this.http.get<Offer[]> ('http://localhost:3000/offers')
  }

  putOffers(o: Offer) {
    return this.http.put<Offer> ('http://localhost:3000/offers/'+o.id,o)
  }


  getoffersbyid(id) {
    return this.http.get<Offer> ('http://localhost:3000/offers/'+id)
  }

  

}
