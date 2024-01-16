export type Pagination = {
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    perPage: number;
};

export type PaginationParams =  {
    offset: number;
    limit?: number;
    filter?: Record<string, any>;
}

export type SuccessResponse<T> = {
    data: T[];
    pagination: Pagination;
    error: null;
};

export type ErrorResponse = {
    data: null;
    pagination: null;
    error: Error;
};

export type PagedResponseData<T> = SuccessResponse<T> | ErrorResponse;
