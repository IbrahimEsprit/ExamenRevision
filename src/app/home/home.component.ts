import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/modeles/offer';
import { RecrutementServiceService } from '../recrutement-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: RecrutementServiceService) { }

  tab: Offer[];
  ngOnInit(): void {

     //on utilise subscribe car kif thiti l api raw yelzemk réponse synchrone
     this.service.fetchOffers().subscribe(x => {  
            this.tab=x;
            console.log(this.tab);
     } )
     
  }

  public transfert(k: Offer) {
    k.nbCandidate++;
    this.service.putOffers(k);
  }


}
