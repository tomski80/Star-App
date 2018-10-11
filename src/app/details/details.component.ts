import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarsService } from '../stars.service';
import { Star } from '../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, DoCheck {

  id: number;
  private oldId: number;
  private sub: any;
  star: Star;

  constructor(
    private route: ActivatedRoute,
    private starServices: StarsService
   ) { }

  /**
   *  React to ID change
   */
  ngDoCheck() {
    if (this.oldId !== this.id) {
      this.getNewStar();
      this.oldId = this.id;
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.id = +params['id']);
  }

  /**
   * Retrieve detail about single star by ID.
   */
  getNewStar(): void {
    this.starServices.getStarById(this.id)
    .subscribe( star => this.star = star);
  }
}
