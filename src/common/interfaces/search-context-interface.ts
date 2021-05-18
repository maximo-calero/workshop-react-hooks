interface Configuration {
  queryTypes: string[];
  baseUrl: string;
  apiKey: string;
}

export interface SearchContextInterface {
  configuration: Configuration;
  queryUrl: string;
  changeQueryUrl: (newQueryUrl: string) => void;
}
