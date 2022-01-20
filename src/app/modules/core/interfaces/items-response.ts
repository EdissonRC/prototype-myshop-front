import { IAuthor } from './author';
import { IItems } from './items';

export interface IItemsResponse {
  author: IAuthor;
  categories: string[];
  items: IItems[];
}
