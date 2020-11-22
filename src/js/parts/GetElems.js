export default class GetElems {
  async getItems() {
    const result = await fetch("../database/db.json")
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });

    return result;
  }
}
