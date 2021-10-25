import { ApiResponse } from "apisauce";
import Client from "./client";

const endPoint: string = "media";
export class MediaServices {
  public async addEventImage(
    uuid: string,
    image: string
  ): Promise<ApiResponse<string>> {
    return Client.post(`${endPoint}`, { uuid, image });
  }
}
