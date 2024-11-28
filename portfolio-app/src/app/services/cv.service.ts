import { Injectable } from '@angular/core';
import { CV } from '../models/cv';
@Injectable({
 providedIn: 'root'
})
export class CVService {
 constructor() { }
 getCVs(): CV[] {
 return [
 new CV('Verkaufinnendienst Helion', 2021 - 2024),
 new CV('Fussballprofi ', 2004, 2010),
 new CV('Geile siech', 2025),
 ]
 }
}
