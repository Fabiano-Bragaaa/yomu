export interface PaginatedResponse<T> {
  data: T[];
  limit: number;
  offset: number;
  total: number;
}
