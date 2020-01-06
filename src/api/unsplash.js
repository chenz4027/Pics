import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 9c2f875ee0493437585411a8413e785709d7ab72d73b6b4798102fb9cab2b5f2"
  }
});
