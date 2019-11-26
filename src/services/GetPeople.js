import Axios from "axios";

const GetPeople = async page => {
  const { data: Data } = await Axios.get(
    `https://reqres.in/api/users?page=${page}`
  );

  return Data;
};

export default GetPeople;
