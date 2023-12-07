import { User } from "./User";

export interface Contrat {
    _id?: string;
    description?: string;
    user?:User;

  }