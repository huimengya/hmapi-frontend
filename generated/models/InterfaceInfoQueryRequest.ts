/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseParamsField } from './ResponseParamsField';

export type InterfaceInfoQueryRequest = {
    current?: number;
    description?: string;
    method?: string;
    name?: string;
    pageSize?: number;
    reduceScore?: number;
    responseParams?: Array<ResponseParamsField>;
    returnFormat?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
};

