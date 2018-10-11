import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  /**
   * add message to messages list to show
   * and removes it after x seconds if second argument not true,
   *
   * @param message - message to add to list
   * @param sec - time before message removed from the list
   * @param dontRemove - if true message will not be removed from the list
   */
  addForSec(message: string, sec: number, dontRemove?: boolean) {
    this.messages.push(message);
    if (!dontRemove) {
      this.clearAfterSec(sec);  // remove message after 2 seconds
    }
  }

  clearAll() {
    this.messages = [];
  }

  private clearFirst() {
    if (this.messages) {
    this.messages.shift();
    }
  }

  clearAfterSec(seconds) {
    setTimeout( () => {
      this.clearFirst();
    }, seconds * 1000);
  }
}
