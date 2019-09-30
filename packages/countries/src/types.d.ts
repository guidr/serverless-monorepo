interface BaseCountry {
  name: string;
  flag: string | null;
}

export interface Country extends BaseCountry {
  code: string;
}

export interface RestCountry extends BaseCountry {
  alpha2Code: string;
}
