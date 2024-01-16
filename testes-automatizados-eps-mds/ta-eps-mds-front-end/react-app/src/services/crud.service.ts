import axios, {AxiosResponse} from 'axios';
import { ResponseData } from '../types/api-response';
import {PagedResponseData, PaginationParams} from '../types/pagination';

const API_URL = import.meta.env.VITE_API_URL;

async function handleRequest<R>(request: Promise<AxiosResponse<R>>): Promise<ResponseData<R>> {
    try {
        const response = await request;
        return { data: response.data, error: null };
    } catch (error) {
        const responseError = error.response?.data?.message || error.message;
        return { data: null, error: new Error(responseError) };
    }
}

function createCrudService<T>(endpoint: string) {
    return {
        create: async (data: T): Promise<ResponseData<T>> => handleRequest(axios.post(`${API_URL}/${endpoint}/create`, data)),
        findAll: async (): Promise<ResponseData<T[]>> => {
            return handleRequest(axios.get(`${API_URL}/${endpoint}`));
        },
        findAllPaged: async ({ offset, limit = 10, filter = {} }: PaginationParams): Promise<PagedResponseData<T>> => {
            try {
                let params: Record<string, any> = { offset, limit };
                if (filter) {
                    Object.keys(filter).forEach(key => {
                        if(filter[key]) {
                            params = { ...params, ...{ [key]: filter[key] }  }
                        }
                    });
                }
                const response = await axios.get(`${API_URL}/${endpoint}/find-all-paged`, {
                    params
                });
                const { data: responseData } = response;
                const paginationInfo = responseData.pagination;
                return {
                    data: responseData.data,
                    pagination: paginationInfo,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    pagination: null,
                    error: error as Error
                };
            }
        },
        findByID: async (id: number): Promise<ResponseData<T>> => handleRequest(axios.get(`${API_URL}/${endpoint}/${id}`)),
        update: async (id: number, data: T): Promise<ResponseData<T>> => handleRequest(axios.put(`${API_URL}/${endpoint}/update/${id}`, data)),
        delete: async (id: number): Promise<ResponseData<void>> => handleRequest(axios.delete(`${API_URL}/${endpoint}/delete/${id}`)),
    };
}

export {
    createCrudService,
    handleRequest,
}

