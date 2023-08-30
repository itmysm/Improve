import axios from "axios";

const defaultOptions = {
  accessTokenKey: "access-token",
  apiVersion: null,
  tokenRefreshUrl: "",
  onError: console.error,
  autoCamelCase: true,
  prefixUrl: '',
  timeout: 3000,
};

export type HttpClientOptions = typeof defaultOptions;

export default function createHttpClient(options: Partial<HttpClientOptions>) {
  const mergedOptions = { ...defaultOptions, ...options };

  const showError = (error: Error) => {
    console.log(error);
  };

  const client = axios.create({
    baseURL: mergedOptions.prefixUrl,
    timeout: mergedOptions.timeout,
  });

  const combinedOptions = (options: any) => {
    return { ...options };
  };

  return {
    get: async <T = any>(
      url: string,
      searchParams?: any,
      options: any = {}
    ): Promise<T> => {
      try {
        const response = await client.get(url, {
          ...combinedOptions(options),
          params: searchParams,
        });
        return response.data;
      } catch (error: any) {
        showError(error);
        throw error;
      }
    },
    post: async <T = any>(
      url: string,
      json?: unknown,
      options: any = {}
    ): Promise<T> => {
      try {
        const response = await client.post(url, json, combinedOptions(options));
        return response.data;
      } catch (error: any) {
        showError(error);
        throw error;
      }
    },
    put: async <T = any>(
      url: string,
      json: unknown,
      options: any = {}
    ): Promise<T> => {
      try {
        const response = await client.put(url, json, combinedOptions(options));
        return response.data;
      } catch (error: any) {
        showError(error);
        throw error;
      }
    },
  };
}
