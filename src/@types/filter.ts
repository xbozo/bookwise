import { Category } from "./category";

export type Filter = Partial<Category> & { isActive?: boolean };
