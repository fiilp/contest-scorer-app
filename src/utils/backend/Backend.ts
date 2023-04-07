import { BACKEND_URL } from "../../configs";

export interface IBackend {
  post<T>(url: string, data: T): Promise<Response>;
}

function post<T>(url: string, data: T): Promise<Response> {
  return fetch(BACKEND_URL + url, {
    method: "POST",
    //mode: "no-cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
}

export const backend: IBackend = {
  post: post,
};
