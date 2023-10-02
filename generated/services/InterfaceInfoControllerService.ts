/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_InterfaceInfo_ } from '../models/BaseResponse_InterfaceInfo_';
import type { BaseResponse_List_InterfaceInfo_ } from '../models/BaseResponse_List_InterfaceInfo_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_object_ } from '../models/BaseResponse_object_';
import type { BaseResponse_Page_InterfaceInfo_ } from '../models/BaseResponse_Page_InterfaceInfo_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { IdRequest } from '../models/IdRequest';
import type { InterfaceInfoAddRequest } from '../models/InterfaceInfoAddRequest';
import type { InterfaceInfoQueryRequest } from '../models/InterfaceInfoQueryRequest';
import type { InterfaceInfoSearchTextRequest } from '../models/InterfaceInfoSearchTextRequest';
import type { InterfaceInfoUpdateAvatarRequest } from '../models/InterfaceInfoUpdateAvatarRequest';
import type { InterfaceInfoUpdateRequest } from '../models/InterfaceInfoUpdateRequest';
import type { InvokeRequest } from '../models/InvokeRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InterfaceInfoControllerService {

    /**
     * addInterfaceInfo
     * @param requestBody
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addInterfaceInfoUsingPost(
        requestBody?: InterfaceInfoAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/add',
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
     * deleteInterfaceInfo
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteInterfaceInfoUsingPost(
        requestBody?: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/delete',
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
     * getInterfaceInfoById
     * @param id id
     * @returns BaseResponse_InterfaceInfo_ OK
     * @throws ApiError
     */
    public static getInterfaceInfoByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_InterfaceInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/interfaceInfo/get',
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
     * listInterfaceInfoBySearchTextPage
     * @param requestBody
     * @returns BaseResponse_Page_InterfaceInfo_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listInterfaceInfoBySearchTextPageUsingPost(
        requestBody?: InterfaceInfoSearchTextRequest,
    ): CancelablePromise<BaseResponse_Page_InterfaceInfo_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/get/searchText/',
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
     * invokeInterface
     * @param requestBody
     * @returns BaseResponse_object_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static invokeInterfaceUsingPost(
        requestBody?: InvokeRequest,
    ): CancelablePromise<BaseResponse_object_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/invoke',
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
     * listInterfaceInfo
     * @param current
     * @param description
     * @param method
     * @param name
     * @param pageSize
     * @param reduceScore
     * @param responseParams0Desc
     * @param responseParams0FieldName
     * @param responseParams0Id
     * @param responseParams0Type
     * @param responseParams0Value
     * @param returnFormat
     * @param sortField
     * @param sortOrder
     * @param status
     * @param url
     * @param userId
     * @returns BaseResponse_List_InterfaceInfo_ OK
     * @throws ApiError
     */
    public static listInterfaceInfoUsingGet(
        current?: number,
        description?: string,
        method?: string,
        name?: string,
        pageSize?: number,
        reduceScore?: number,
        responseParams0Desc?: string,
        responseParams0FieldName?: string,
        responseParams0Id?: string,
        responseParams0Type?: string,
        responseParams0Value?: string,
        returnFormat?: string,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        url?: string,
        userId?: number,
    ): CancelablePromise<BaseResponse_List_InterfaceInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/interfaceInfo/list',
            query: {
                'current': current,
                'description': description,
                'method': method,
                'name': name,
                'pageSize': pageSize,
                'reduceScore': reduceScore,
                'responseParams[0].desc': responseParams0Desc,
                'responseParams[0].fieldName': responseParams0FieldName,
                'responseParams[0].id': responseParams0Id,
                'responseParams[0].type': responseParams0Type,
                'responseParams[0].value': responseParams0Value,
                'returnFormat': returnFormat,
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
     * listInterfaceInfoByPage
     * @param requestBody
     * @returns BaseResponse_Page_InterfaceInfo_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listInterfaceInfoByPageUsingPost(
        requestBody?: InterfaceInfoQueryRequest,
    ): CancelablePromise<BaseResponse_Page_InterfaceInfo_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/list/page',
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
     * offlineInterfaceInfo
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static offlineInterfaceInfoUsingPost(
        requestBody?: IdRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/offline',
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
     * onlineInterfaceInfo
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static onlineInterfaceInfoUsingPost(
        requestBody?: IdRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/online',
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
     * updateInterfaceInfo
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateInterfaceInfoUsingPost(
        requestBody?: InterfaceInfoUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/update',
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
     * updateInterfaceInfoAvatarUrl
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateInterfaceInfoAvatarUrlUsingPost(
        requestBody?: InterfaceInfoUpdateAvatarRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/updateInterfaceInfoAvatar',
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
