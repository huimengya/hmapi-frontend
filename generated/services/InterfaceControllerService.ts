/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_Interface_ } from '../models/BaseResponse_Interface_';
import type { BaseResponse_List_Interface_ } from '../models/BaseResponse_List_Interface_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_Interface_ } from '../models/BaseResponse_Page_Interface_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { IdRequest } from '../models/IdRequest';
import type { InterfaceAddRequest } from '../models/InterfaceAddRequest';
import type { InterfaceUpdateRequest } from '../models/InterfaceUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InterfaceControllerService {

    /**
     * addInterface
     * @param requestBody
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addInterfaceUsingPost(
        requestBody?: InterfaceAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/inter/add',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteInterface
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteInterfaceUsingPost(
        requestBody?: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/inter/delete',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getInterfaceById
     * @param id id
     * @returns BaseResponse_Interface_ OK
     * @throws ApiError
     */
    public static getInterfaceByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_Interface_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/inter/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listInterface
     * @param current
     * @param id
     * @param method
     * @param name
     * @param pageSize
     * @param sortField
     * @param sortOrder
     * @param status
     * @param url
     * @param userId
     * @returns BaseResponse_List_Interface_ OK
     * @throws ApiError
     */
    public static listInterfaceUsingGet(
        current?: number,
        id?: number,
        method?: string,
        name?: string,
        pageSize?: number,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        url?: string,
        userId?: number,
    ): CancelablePromise<BaseResponse_List_Interface_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/inter/list',
            query: {
                'current': current,
                'id': id,
                'method': method,
                'name': name,
                'pageSize': pageSize,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'url': url,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listInterfaceByPage
     * @param current
     * @param id
     * @param method
     * @param name
     * @param pageSize
     * @param sortField
     * @param sortOrder
     * @param status
     * @param url
     * @param userId
     * @returns BaseResponse_Page_Interface_ OK
     * @throws ApiError
     */
    public static listInterfaceByPageUsingGet(
        current?: number,
        id?: number,
        method?: string,
        name?: string,
        pageSize?: number,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        url?: string,
        userId?: number,
    ): CancelablePromise<BaseResponse_Page_Interface_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/inter/list/page',
            query: {
                'current': current,
                'id': id,
                'method': method,
                'name': name,
                'pageSize': pageSize,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'url': url,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * onlineInterface
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static onlineInterfaceUsingPost(
        requestBody?: IdRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/inter/online',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateInterface
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateInterfaceUsingPost(
        requestBody?: InterfaceUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/inter/update',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
