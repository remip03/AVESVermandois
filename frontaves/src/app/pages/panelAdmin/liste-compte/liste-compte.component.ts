import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import user from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-liste-compte',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-compte.component.html',
  styleUrl: './liste-compte.component.css'
})
export class ListeCompteComponent implements OnInit {

  listeUser: user[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.listeUser = res;
    })
  }

}
