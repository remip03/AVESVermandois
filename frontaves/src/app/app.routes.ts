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

      //formulaire de contact
    { path: 'formulaireContact', component: FormulaireContactComponent },

      //page fruit et legumes
    { path: 'FeL', component: FeLComponent },

      //page Mentions légales
    { path: 'mentionsLegales', component: MentionsLegalesComponent },

      //page connexion
    { path: 'connexion', component: ConnexionComponent },

      //route si la page n'existe pas ou  plus.
      // Attention, cette ligne doit rester à la fin du code.
    { path: '**', component: NotFoundComponent },

];
