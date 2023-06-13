export default class Movies {
  private apiKey: string;
  private url = "http://www.omdbapi.com/?i=tt3896198&apikey=";

  constructor(key: string) {
    this.apiKey = key;
  }

  public async getMovieByNameAndYear(name: string, year: string) {
    const response = await fetch(this.url + `${this.apiKey}&t=${encodeURIComponent(name)}&y=${year}`, {
      method: "GET",
    });

    return response.json();
  }

  public async getMovieByName(name: string) {
    const response = await fetch(this.url + `${this.apiKey}&t=${encodeURIComponent(name)}`, {
      method: "GET",
    });

    return response.json();
  }
}
