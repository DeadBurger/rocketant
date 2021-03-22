import axios from "axios";
import * as signalR from "@microsoft/signalr";
import { API_BASE_URL } from "../constants";

class SignalRHelper {
  static data = {
    username: "iiro",
  };

  static connect(): Promise<signalR.HubConnection> {
    return this._fetchConnectionInfo().then((info) => {
      const options = {
        accessTokenFactory: () => info.accessToken,
      };
      const connection = new signalR.HubConnectionBuilder()
        .withUrl(info.url, options)
        .configureLogging(signalR.LogLevel.Information)
        .build();
      return connection;
    });
  }
  static _getAxiosConfig() {
    const config = {
      headers: { "x-ms-signalr-userid": this.data.username },
    };
    return config;
  }

  static _fetchConnectionInfo() {
    return axios
      .post(
        `${API_BASE_URL}/api/signalr/negotiate?userid=${this.data.username}`,
        null,
        this._getAxiosConfig()
      )
      .then((resp) => resp.data);
  }
}

export default SignalRHelper;
