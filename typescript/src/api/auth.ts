import { AUTH_DATA } from "@/model";
import { axiosInstance } from "@/utils";

class AuthApi {
  initialize(): Promise<AUTH_DATA> {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axiosInstance.get("/auth/refresh");
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  login(loginDetails: { email: string; password: string }): Promise<AUTH_DATA> {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axiosInstance.post("/auth/login", loginDetails);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  logout(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await axiosInstance.get("/auth/logout");
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
}

export const authApi = new AuthApi();
