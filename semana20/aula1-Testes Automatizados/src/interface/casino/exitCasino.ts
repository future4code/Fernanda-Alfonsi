export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  export interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }