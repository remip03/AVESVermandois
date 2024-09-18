import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import user from '../../../models/user.model';

@Component({
  selector: 'app-update-compte',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './update-compte.component.html',
  styleUrl: './update-compte.component.css'
})
export class UpdateCompteComponent implements OnInit {

  valid: boolean = false;
  detailUser: FormGroup;
  userId!: number;
  userMdP!: string;
  listeRoles = ['ROLE_ADMIN', 'ROLE_FEL', 'ROLE_FINANCEUR', 'ROLE_DOUBLE', 'ROLE_FORMULAIRECONTACT'];

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.detailUser = this.fb.group({
      id: [''],
      nom_g: ['', Validators.required],
      prenom_g: ['', Validators.required],
      email: ['', Validators.required],
      roles: ['', Validators.required],
      password: ['']
    })
   }

   updateUser(): void {
    this.valid = true;
    if (this.detailUser.invalid){
      return;
    }
    if (this.userId) {
      this.userService.updateUser({...this.detailUser.value, id: this.userId}).subscribe({
        next: () => {
          alert('Ce compte a bien été modifié.');
          this.router.navigate(['/listecompte']);
        },
        error: () => {
          alert('Echec de la modification de ce compte')
        }
      })
    }
   }

   deleteUser () {
    this.userService.deleteUser(this.userId).subscribe({
      next: () => {
        alert('Ce compte a été supprimé.');
        this.router.navigate(['/listecompte']);
      },
      error: () => {
        alert("Echec : ce compte n'a pas été supprimé");
      }
    })
   }

   ngOnInit(): void {
     this.userId = Number(this.route.snapshot.paramMap.get('id'));
     if(this.userId){
      this.userService.getUser(this.userId).subscribe(
        (data: user) => this.detailUser.patchValue({...data})
      );
     }
   }

}
