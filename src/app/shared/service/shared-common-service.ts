import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedCommonService {
  private filePath = 'assets/categories_of_operators.json';
  public async getJsonData<T>(url: string = this.filePath): Promise<T> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
}
