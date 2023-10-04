/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_List_InterfaceInvokeCountVO_ } from '../models/BaseResponse_List_InterfaceInvokeCountVO_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InterfaceInvokeCountControllerService {

    /**
     * getTotalInvokesByAny
     * @param limit limit
     * @returns BaseResponse_List_InterfaceInvokeCountVO_ OK
     * @throws ApiError
     */
    public static getTotalInvokesByAnyUsingGet(
        limit?: number,
    ): CancelablePromise<BaseResponse_List_InterfaceInvokeCountVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/invokeCount/total',
            query: {
                'limit': limit,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getUserInvoke
     * @param limit limit
     * @returns BaseResponse_List_InterfaceInvokeCountVO_ OK
     * @throws ApiError
     */
    public static getUserInvokeUsingGet(
        limit?: number,
    ): CancelablePromise<BaseResponse_List_InterfaceInvokeCountVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/invokeCount/userInvoke',
            query: {
                'limit': limit,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
