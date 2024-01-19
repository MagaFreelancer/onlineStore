export default class favouritesCards {
  constructor(favsList) {
    this.favsList = favsList;
  }
  async getFavs() {
    try {
      if (this.favsList.length === 0) {
        return 
      } else {
        const ids = this.favsList.toString();
        const queryString = `https://jsproject.webcademy.ru/items?ids=${ids}`;
        const result = await fetch(queryString);
        const data = await result.json();
        this.cards = await data;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
