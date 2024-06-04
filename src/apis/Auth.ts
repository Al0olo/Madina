import axiosInstance from "../axios";

export async function Signup($body:any) {
    return axiosInstance({
      method: "post",
      url: "taxi_madina_app.api.Authentication.authenticate_user",
      data: $body,
    //   withCredentials: true,
    });
  }