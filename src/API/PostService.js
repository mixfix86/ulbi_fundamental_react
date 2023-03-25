import axios from "axios";

export default class PostService {
  static async getAll() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
