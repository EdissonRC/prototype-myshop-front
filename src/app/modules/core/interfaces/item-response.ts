import { IAuthor } from './author';
import { IItem } from './item';

export interface IItemResponse {
  author: IAuthor;
  item: IItem;
}
