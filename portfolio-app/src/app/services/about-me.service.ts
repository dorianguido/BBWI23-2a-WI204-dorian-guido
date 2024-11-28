import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';
@Injectable({
 providedIn: 'root'
})
export class AboutMeService {
 constructor() { }
 getAboutMe(): AboutMe {
 return new AboutMe('Dorian', '/assets/profile.jpg');
 }
}
