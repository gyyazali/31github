export type Pizza = {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    type: number[];
    size: number[];
    count: number;
  };
  
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
  }
  
 export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
  }
  export type SearchPizzaParams = {
    currentPage: string;
    category: string;
    sortBy: string;
    order: string;
    search: string;
  };