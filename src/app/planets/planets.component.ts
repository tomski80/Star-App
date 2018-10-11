import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { StarsService } from '../stars.service';
import { Planet, Star } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements DoCheck {

  @Input() star: Star;
  planets: Planet[];
  oldStarName = '';
  selectedPlanet: Planet;

  constructor(private starsService: StarsService) { }

  ngDoCheck() {
    if (this.star) {
        if (this.star.name !== this.oldStarName) {
            this.planets = [];
            this.getPlanets(this.star);
            this.oldStarName = this.star.name;
        }
    }
  }

  getPlanets(star): void {
    this.starsService.getPlanets(this.star._links.planets['href'])
    .finally( () => this.selectedPlanet = this.planets[0] )
    .subscribe(planets => this.planets = planets['_embedded']['planets']);
  }

  onSelect(planet): void {
    this.selectedPlanet = planet;
  }

  isSelected(index, planet): boolean {
    if (this.selectedPlanet) {
      if (this.selectedPlanet.name === planet.name) {
        return true;
      }else {
        return false;
      }
    }else if (index === 0) {
      return true;
    }
    return false;
  }
}
