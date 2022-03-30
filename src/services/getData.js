import api from "./api";

const getData = async () => {

  try {
    const response = await api.get("people/");
    return {res: response.data}
  } catch (error) {
    return {res: error.response.data}
  }
}

export default getData;