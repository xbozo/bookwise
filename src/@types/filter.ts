import { Category } from "@/actions/books/fetchAllCategories";

export type Filter = Partial<Category> & { isActive?: boolean };
