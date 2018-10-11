import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StarsService } from '../stars.service';
import { AltNameWithStars, NameWithStar, AltName, Star } from '../interfaces';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnChanges {

  @Input() searchName: string;
  @Input() whichList: string;
  oldSearchName: string;
  altNamesWithStars: AltNameWithStars;
  nameWithStars: NameWithStar[];
  totalPages: number;
  selectedStar: Star;
  page = 0;
  size = 10;
  sort = 'name,asc';

  constructor(private starsService: StarsService) { }

  ngOnInit() {
  }

  /**
   *  React to user actions
   *  Retrieve new data if user input new name.
   */
  ngOnChanges() {
    if (this.oldSearchName !== this.searchName) {
      this.page = 0;
      this.oldSearchName = this.searchName;
    }
    this.getStarsByName(this.page, this.size, this.searchName, this.sort );
  }

  /**
   * Get stars by name from alternateNames repository
   *
   * @param page - page number
   * @param size - size of the pages
   * @param name - name to look for
   * @param sort - sort method (e.g. by name)
   */
  getStarsByName(page: number, size: number, name: string, sort: string): void {
    this.starsService.getStarsByName(page, size, name, sort )
    .finally(() => {
      this.nameWithStars = this.altNamesWithStars._embedded['alternateNames'];
      this.totalPages = this.altNamesWithStars.page.totalPages; })
    .subscribe(names => this.altNamesWithStars = names);
  }

  forwardPg(): void {
    if (this.page < (this.totalPages - 1)) {
      this.page += 1;
    }
    this.getStarsByName(this.page, this.size, this.searchName, this.sort );
  }

  backPg(): void {
    if (this.page > 0) {
      this.page -= 1;
      this.getStarsByName(this.page, this.size, this.searchName, this.sort );
    }
  }

  starId(nws: NameWithStar): string {
    const id = nws._links.planets['href'].match(/\/\d*\/planets$/)[0];
    return id.replace('/planets', '');
  }

}
