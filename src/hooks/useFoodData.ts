import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8081"; 

const fetchData = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(API_URL + '/food');
  return response;
}

export function useFoodData() {

  const query = useQuery({
    queryKey: ['food-data'],
    queryFn: fetchData,
    retry: 2,
  })

  return{
    ...query,
    data: query.data?.data
  }

}