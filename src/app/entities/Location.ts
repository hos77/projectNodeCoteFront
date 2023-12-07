import { Contrat } from "./Contrat";
import { EtatL } from "./EtatL";
import { User } from './User';
import { Voiture } from "./Voiture";

export interface Location {
    _id?: string;
    datedebut?: Date;
    datefin?: Date;
    coutTotal?: number;
    etat?: EtatL;
    voiture?: Voiture;
    contrat?: Contrat;
    user?: User;

  }