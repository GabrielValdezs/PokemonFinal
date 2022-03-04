import axios from "axios";

// A mock function to mimic making an async request for data

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function getPokemon() {
  return new Promise((resolve) =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      //.get("http://pokeapi.co/api/v2/type?{param1}/")
      //.get("https://pokeapi.co/api/v2/type?limit=100/")
      .then((response) => {
        resolve({ data: response.data });
      })
  );
}
 