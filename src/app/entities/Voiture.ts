import { Categorie } from "./Categorie";
import { Etat } from "./Etat";

export interface Voiture {
    _id?: string;
    marque: string;
    modele: string;
    picture: string;
    couleur: string;
    kilometrage: string;
    etat:Etat ;
    prix: number;
    numrero_matricule: number;
    nb_piece: number;
    disponible: boolean;
    category: Categorie;
    
  }