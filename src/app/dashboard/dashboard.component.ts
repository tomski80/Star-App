import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  moreThenPlanets = 1;
  searchResult: boolean;
  searchName: string;
  whichList: string;
  showInfoText: boolean;
  showListAll: boolean;
  showListWithPlanet: boolean;
  showListSearch: boolean;

  constructor() { }

  ngOnInit() {
    this.searchResult = false;
    this.searchName = '';
    this.whichList = 'all';
    this.moreThenPlanets = 1;
    this.showInfoText = true;
    this.showListAll = true;
    this.showListWithPlanet = false;
    this.showListSearch = false;
  }

  /**
   * (click) callback function for UI tabs.
   */
  allSelected(): void {
    this.whichList = 'all';
    this.showListAll = true;
    this.showListWithPlanet = false;
    this.showListSearch = false;
  }

   /**
   * (click) callback function for UI tabs.
   */
  withPlanetsSelected(): void {
    this.whichList = 'withPlanet';
    this.showListAll = false;
    this.showListWithPlanet = true;
    this.showListSearch = false;
  }

   /**
   * (click) callback function for UI tabs.
   */
  searchSelected(): void {
    this.whichList = 'search';
    this.showListAll = false;
    this.showListWithPlanet = false;
    this.showListSearch = true;
  }

  /**
   * Get name that user is searching for.
   * It get's value of HTML input element
   *
   * @param input - HTMLInputElement
   */
  searchByName(input: HTMLInputElement): void {
    this.searchName = input.value;
    input.value = '';
    this.searchResult = true;
    this.searchSelected();
  }

  /**
   * route was activated which means star details
   * on screen. We no longer need to show message
   * to user to select star from list for details.
   * So we can set this.showInfoText to false.
   */
  onActivate() {
    this.showInfoText = false;
  }
}
