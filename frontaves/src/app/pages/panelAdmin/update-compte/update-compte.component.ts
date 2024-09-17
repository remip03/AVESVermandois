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

  detailUser: FormGroup;
  userId!: number;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.detailUser = this.fb.group({
      nomG: ['', Validators.required],
      prenomG: ['', Validators.required],
      email: ['', Validators.required],
      roles: ['', Validators.required],
      id: [''],
      password: ['']
    })
   }

   ngOnInit(): void {
     this.userId = Number(this.route.snapshot.paramMap.get('id'));
     if(this.userId){
      this.userService.getuser(this.userId).subscribe((data: user) => this.detailUser.patchValue(data));
     }
   }

}
