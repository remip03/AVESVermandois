import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-compte',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './create-compte.component.html',
  styleUrl: './create-compte.component.css'
})
export class CreateCompteComponent {

  valid: boolean = false;
  newUser: FormGroup;
  listeRoles = [['ROLE_ADMIN'], ['ROLE_FEL'], ['ROLE_FINANCEUR'], ['ROLE_DOUBLE'], ['ROLE_FORMULAIRECONTACT']];

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.newUser = this.fb.group({
      email: ['', Validators.required],
      roles: [['ROLE_USER'], Validators.required],
      password: ['', Validators.required],
      nom_g: ['', Validators.required],
      prenom_g: ['', Validators.required],
    })
  }

  createUser(): void {
    this.valid = true;
    if (this.newUser.invalid){
      return;
    }
    else{
      this.userService.addUser(this.newUser.value).subscribe({
        next: () => {
          alert('Ce compte a bien été crée.');
          this.router.navigate(['/listecompte']);
        },
        error: () => {
          alert('Echec de la création de ce compte')
        }
      })
    }
  }

}
