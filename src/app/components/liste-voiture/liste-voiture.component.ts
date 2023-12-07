import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from 'src/app/entities/Voiture';
import { CategorieServiceService } from 'src/app/services/categorie-service.service';

@Component({
  selector: 'app-liste-voiture',
  templateUrl: './liste-voiture.component.html',
  styleUrls: ['./liste-voiture.component.css']
})
export class ListeVoitureComponent implements OnInit {

  categoryId!: string ;
  voitures: Voiture[] = [];

  constructor(private route: ActivatedRoute, private voitureService: CategorieServiceService) { }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      // Fetch cars based on categoryId
      this.getVoituresByCategory();
    });

    

}

getVoituresByCategory(): void {
  this.voitureService.getVoituresByCategory(this.categoryId).subscribe(
    (voitures) => {
      this.voitures = voitures;
    },
    (error) => {
      console.error('Error fetching voitures:', error);
    }
  );
}






}
