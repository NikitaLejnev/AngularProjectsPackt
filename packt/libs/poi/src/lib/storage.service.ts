import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  get(itemName: string): string | null {
    return localStorage.getItem(itemName);
  }

  set(itemName: string, itemValue: number | string ): void {
    localStorage.setItem(itemName, itemValue.toString());
  }

  remove(itemName: string): void {
    localStorage.removeItem(itemName);
  }

}
