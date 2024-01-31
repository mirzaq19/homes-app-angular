import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/locations";

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    const housingLocations = await response.json();
    return housingLocations ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    const housingLocation = await response.json();
    return housingLocation ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
