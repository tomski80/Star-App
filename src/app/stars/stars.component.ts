import { Component, OnInit, Input } from '@angular/core';
import { StarsService } from '../stars.service';

import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Star, Planet, AltName, AltNameWithStars, StarsResult } from '../interfaces';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input() whichList: string;
  @Input() moreThenPlanets: number;
  starsRes: StarsResult;
  stars: Star[];
  selectedStar: Star;
  totalPages: number;
  page = 0;
  size = 10;
  sort = 'numberOfPlanets,asc';

  constructor(private starsService: StarsService) { }

  /**
   * Helper method to get list of stars from server
   * it check this.whichList variable to decide
   * what list we need.
   * @param page - page number
   * @param size - size of the pages
   */
  private getData(page: number, size: number): void {
    this.page = page;
    this.size = size;
    if (this.whichList === 'withPlanet') {
      this.sort = 'distance,asc';
      // this.moreThenPlanets parameters is passed to uri parameters
      // to retrieve only stars with more then planets.
      this.getStars(this.page, this.size, this.sort, this.moreThenPlanets);
    }else {
      this.sort = 'numberOfPlanets,desc';
      this.getStars(this.page, this.size, this.sort);
    }
  }

  /**
   * Retrieve data on component initialization
   */
  ngOnInit() {
    this.getData(this.page, this.size);
  }

  /**
   * Retrive data on change (e.g. page changed, whichList changed )
   * change will be caused by user interaction
   */
  ngOnChanges() {
    this.getData(this.page, this.size);
  }

  /**
   * Getting Stars from the server using starsService
   * this.starsService.getStars returns Observable that
   * we need to subscribe to.
   *
   * @param page - page number
   * @param size - size of the pages
   * @param sort - on what to sort data
   * @param planetsCount - optional parameter if we retrieving stars with more then number of planets.
   */
  getStars(page: number, size: number, sort: string, planetsCount?: number): void {
    this.starsService.getStars(page, size, sort, planetsCount)
    .finally ( () => {this.stars = this.starsRes._embedded.stars;
                      this.totalPages = this.starsRes.page.totalPages; } )
    .subscribe(stars => this.starsRes = stars);
  }

  /**
   * Method to get Star Id from links
   * @param star - star details retrievent from the server.
   */
  starId(star: Star): string {
    return star._links.self['href'].match(/\/\d*$/)[0];
  }

  forwardPg(): void {
    if (this.page < (this.totalPages - 1)) {
      this.page += 1;
    }
    this.getData(this.page, this.size);
  }

  backPg(): void {
    if (this.page > 0) {
      this.page -= 1;
      this.getData(this.page, this.size);
    }
  }
}
