import { Component, OnInit } from '@angular/core';
import FeL from '../../models/FeL.model';
import { FeLService } from '../../services/fe-l.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fe-l',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fe-l.component.html',
  styleUrl: './fe-l.component.css'
})
export class FeLComponent implements OnInit{

  listeFeLs: FeL[] = [];

  constructor(
    private FeLservice: FeLService
  ) {  }

  afficherFeL(visible: boolean) {
    visible = !visible;
  }

  ngOnInit(): void {
    this.FeLservice.getFeLs().subscribe((res) => {
      this.listeFeLs = res;
    })
  }

}
