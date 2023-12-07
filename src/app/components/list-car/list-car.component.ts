import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/entities/Categorie';
import { CategorieServiceService } from 'src/app/services/categorie-service.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  categories: Categorie[] = [];


constructor(private categorieService: CategorieServiceService , private router: Router){}

  ngOnInit(): void {

    this.getCategories();
   
  }


  getCategories(): void {
    this.categorieService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  navigateToListeVoiture(categoryId: string): void {
    this.router.navigate(['/listeVoiture', categoryId]);
  }








}


