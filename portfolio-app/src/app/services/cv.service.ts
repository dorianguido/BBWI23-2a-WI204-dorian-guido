import { Injectable } from '@angular/core';
import { CV } from '../models/cv';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class CVService {
    constructor(
    private http: HttpClient
    ) { }
    getCVs(): Observable<CV[]> {
    return this.http.get<CV[]>('/api/cvs/');
    }
    createCV(cv: CV): Observable<CV> {
    return this.http.post<CV>(`/api/cvs/`, cv);
    }
    getCVById(id: string): Observable<CV> {
        return this.http.get<CV>('/api/cvs/' + id);
      }
    updateCV(id: string, cv: CV): Observable<CV> {
    return this.http.put<CV>(`/api/cvs/${id}/`, cv);
    }
    deleteCV(id: number): Observable<void> {
    return this.http.delete<void>(`/api/cvs/${id}/`);
    }
   }
// export class CVService {
//  constructor() { }
//  getCVs(): CV[] {
//  return [
//  new CV('Verkaufinnendienst Helion', 2021 - 2024),
//  new CV('Fussballprofi ', 2004, 2010),
//  new CV('Geile siech', 2025),
//  ]
//  }
// }
