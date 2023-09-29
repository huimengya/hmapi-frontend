/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestParamsField } from './RequestParamsField';
import type { ResponseParamsField } from './ResponseParamsField';

export type InterfaceInfoAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    reduceScore?: number;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: Array<RequestParamsField>;
    responseHeader?: string;
    responseParams?: Array<ResponseParamsField>;
    returnFormat?: string;
    url?: string;
};

