export type ResponseData<T> = {
    data: T | null;
    error: Error | null;
};
