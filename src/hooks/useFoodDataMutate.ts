import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8081";

const postData = async (data: FoodData): AxiosPromise<FoodData> => {
  return axios.post(API_URL + '/food', data);
};

export function useFoodDataMutate() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['food-data'] })
    },
    retry: 2,
  });

  return mutate;
}
