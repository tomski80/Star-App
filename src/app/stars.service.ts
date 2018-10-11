import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http/src/params';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Star, Planet, AltName, StarsResult, AltNameWithStars } from './interfaces';
import { MessageService } from './message.service';

@Injectable()
export class StarsService {

  stars: object[];

  private rootUri = encodeURI('http://webdevelopertest.playfusionservices.com/webapptest');

  constructor(private http: HttpClient,
              private messageService: MessageService) { }


  /** Log a message with the MessageService */
  private log(message: string, time: number) {
    this.messageService.addForSec(message, time);
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console
    // show message to the user.
    this.log('Oh no! Something went wrong! Please retry.', 4);
    this.log(`${operation} failed: ${error.message}`, 4);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/**
 * get Stars from remote server using HTTP request
 *
 * @param page - page number to get
 * @param size - size of the pages to get
 * @param sort - by what to sort (e.g. name, distance, numberOfPlanets )
 * @param planetsCount - optional parameter - if present method will use server search method(findByNumberOfPlanetsGreaterThan)
 */
  getStars(page: number, size: number, sort: string, planetsCount?: number): Observable<StarsResult> {
    let partial;
    if (!planetsCount) {
      partial = encodeURI(`/stars?page=${page}&size=${size}&sort=${sort}`);
    }else {
      partial =
      encodeURI(`/stars/search/findByNumberOfPlanetsGreaterThan?numberOfPlanets=${planetsCount}&page=${page}&size=${size}&sort=${sort}`);
    }
    const uri = this.rootUri + partial;
    return this.http.get<StarsResult>(uri)
    .pipe(
      catchError(this.handleError<StarsResult>('getStars'))
    );
  }

  /**
   * get Stars from the server from alternateNames repository
   * using search method findByNameLike ()
   *
   * @param page - page number
   * @param size - size of the pages
   * @param name - name to find - this method automaticly adds wildcard at beginning and end of the name
   * @param sort - by what to sort (e.g. name )
   * @param strict - if strict is present and truthy wildcards will not by added to name
   */
  getStarsByName(page: number, size: number, name: string, sort: string, strict?: boolean): Observable<AltNameWithStars> {
    let wildcard = '%';
    if (strict) {
      wildcard = '';
    }
    const partial =
    encodeURI(
    // tslint:disable-next-line:max-line-length
    `/alternateNames/search/findByNameLike?name=${wildcard}${name}${wildcard}&page=${page}&size=${size}&sort=${sort}&projection=NameWithStar`);
    const uri = this.rootUri + partial;
    return this.http.get<AltNameWithStars>(uri)
    .pipe(
      catchError(this.handleError<AltNameWithStars>('getStarsByName'))
    );
  }

  /**
   * Get details about star with id from repository
   * @param id - star id in the stars repository
   */
  getStarById(id: number): Observable<Star> {
    const uri = encodeURI(this.rootUri + `/stars/${id}`);
    return this.http.get<Star>(encodeURI(uri))
    .pipe(
      catchError(this.handleError<Star>('getStarById'))
    );
  }

  /**
   * Get details about star
   * @param uri - full url (it should be acquired from server _links )
   */
  getStar(uri: string): Observable<Star> {
    return this.http.get<Star>(encodeURI(uri))
    .pipe(
      catchError(this.handleError<Star>('getStar'))
    );
  }

  /**
   * Get additional names and details about planets
   * @param uri - full url (it should be acquired from server _links )
   */
  getPlanets(uri): Observable<Planet[]> {
    return this.http.get<Planet[]>(uri)
    .pipe(
      catchError(this.handleError<Planet[]>('getPlanets', []))
    );
  }

  /**
   * Get alternative names for the star
   * @param uri - full url (it should be acquired from server _links )
   */
  getAltNames(uri): Observable<AltName[]> {
    return this.http.get<AltName[]>(uri)
    .pipe(
      catchError(this.handleError<AltName[]>('getAltNames', []))
    );
  }
}
