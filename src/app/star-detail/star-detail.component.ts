import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { StarsService } from '../stars.service';
import { Star, EmbeddedLinks, AltName } from '../interfaces';

@Component({
  selector: 'app-star-detail',
  templateUrl: './star-detail.component.html',
  styleUrls: ['./star-detail.component.css']
})
export class StarDetailComponent implements DoCheck {

  @Input() star: Star;
  oldStarName = '';
  alts: AltName[];

  constructor(private starsService: StarsService) {}

  /**
   * helper method
   * Returns true if star have alternative names
   * (used in template directive to guard against empty [])
   */
  hasAlts(): boolean {
    if (this.alts) {
        return this.alts.length > 1;
    }else {
        return false;
    }
  }

  /**
   * Check if user selected different star.
   * Retrieve alternative names if star changed.
   */
  ngDoCheck() {
    if (this.star) {
        if (this.star.name !== this.oldStarName) {
            this.getAltNames(this.star);
            this.oldStarName = this.star.name;
        }
    }
  }
  /**
   * Get additional alternative names for selected Star.
   * @param star - selected star: Star details.
   */
  getAltNames(star: Star): void {
    const links: EmbeddedLinks = this.star._links;
    this.starsService.getAltNames(links.additionalNames['href'])
    .subscribe(names => this.alts = names['_embedded']['alternateNames']);
  }

}
