import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/modeles/offer';
import { RecrutementServiceService } from '../recrutement-service.service';

@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {
  idOffer: Number;
  l : Offer;

  constructor(private router: ActivatedRoute,
    private service: RecrutementServiceService) { }

  ngOnInit(): void {

      this.router.params.subscribe(params => {
      this.idOffer = params['id'];
      
      });
      this.service.getoffersbyid(this.idOffer).subscribe(x => {
        this.l=x;
        console.log(this.l);
      })
  }






}
