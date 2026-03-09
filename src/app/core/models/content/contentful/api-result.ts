export interface ApiResult<T> {
    sys: {
        type: string;
    }
    total: number;
    skip: number;
    limit: number;
    items: T[];
}