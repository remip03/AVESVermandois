import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormulaireContactComponent } from './pages/formulaire-contact/formulaire-contact.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { FeLComponent } from './pages/fe-l/fe-l.component';
import { AssociationIntermediaireComponent } from './pages/association-intermediaire/association-intermediaire.component';
import { PlateformeMobiliteComponent } from './pages/plateforme-mobilite/plateforme-mobilite.component';
import { EnTerreConnecteeComponent } from './pages/en-terre-connectee/en-terre-connectee.component';
import { AProposDeNousComponent } from './pages/a-propos-de-nous/a-propos-de-nous.component';
import { CreationDHenriComponent } from './pages/creation-dhenri/creation-dhenri.component';
import { SavoirFerComponent } from './pages/savoir-fer/savoir-fer.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ListeFCComponent } from './pages/formulaire-contact/liste-fc/liste-fc.component';
import { DetailFcComponent } from './pages/formulaire-contact/detail-fc/detail-fc.component';
import { ListeCompteComponent } from './pages/panelAdmin/liste-compte/liste-compte.component';
import { UpdateCompteComponent } from './pages/panelAdmin/update-compte/update-compte.component';
import { CreateCompteComponent } from './pages/panelAdmin/create-compte/create-compte.component';
import { UpdateFeLComponent } from './pages/fe-l/update-fe-l/update-fe-l.component';
import { CreateFeLComponent } from './pages/fe-l/create-fe-l/create-fe-l.component';
import { PanierComponent } from './pages/panier/panier.component';
import { UpdatePanierComponent } from './pages/panier/update-panier/update-panier.component';
import { CreatePanierComponent } from './pages/panier/create-panier/create-panier.component';

export const routes: Routes = [

      //route pour l'accueil. Page principale.
    { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
    { path: 'Accueil', component: AccueilComponent },

      //page association intermédiaire
    { path: 'AI', component: AssociationIntermediaireComponent },

      //pages atelier chantier d'insertion
    { path: 'creationHenri', component: CreationDHenriComponent },
    { path: 'savoirFer', component: SavoirFerComponent },

      //page pateforme mobilité
    { path: 'PFM', component: PlateformeMobiliteComponent },

      //page en terre connectée
    { path: 'ETC', component: EnTerreConnecteeComponent },

      //page a propos de nous
    { path: 'aPropos', component: AProposDeNousComponent },

      //pages formulaire de contact
    { path: 'formulaireContact', component: FormulaireContactComponent },
    { path: 'listeFC', component: ListeFCComponent },
    { path: 'listeFC/:id', component: DetailFcComponent },

      //pages fruit et legumes
    { path: 'FeL', component: FeLComponent },
    { path: 'FeL/:id', component: UpdateFeLComponent },
    { path: 'creerFeL', component: CreateFeLComponent },

      //pages paniers
    { path: 'paniers', component: PanierComponent },
    { path: 'paniers/:id', component: UpdatePanierComponent },
    { path: 'creerPanier', component: CreatePanierComponent },

      //page Mentions légales
    { path: 'mentionsLegales', component: MentionsLegalesComponent },

      //pages du panel admin
    { path: 'listecompte', component: ListeCompteComponent },
    { path: 'listecompte/:id', component: UpdateCompteComponent },
    { path: 'creercompte', component: CreateCompteComponent },

      //page connexion
    { path: 'connexion', component: ConnexionComponent },

      //route si la page n'existe pas ou  plus.
      // Attention, cette ligne doit rester à la fin du code.
    { path: '**', component: NotFoundComponent },

];
