import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class UtitlityService {
    constructor() { }
  
    /// Generate random number between 0 and 2

    public getRandomNumber(): number {
        return Math.floor(Math.random() * 2) + 1;
      }
}