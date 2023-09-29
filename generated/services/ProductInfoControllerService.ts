/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_List_ProductInfo_ } from '../models/BaseResponse_List_ProductInfo_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_ProductInfo_ } from '../models/BaseResponse_Page_ProductInfo_';
import type { BaseResponse_ProductInfo_ } from '../models/BaseResponse_ProductInfo_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { IdRequest } from '../models/IdRequest';
import type { ProductInfoAddRequest } from '../models/ProductInfoAddRequest';
import type { ProductInfoUpdateRequest } from '../models/ProductInfoUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductInfoControllerService {

    /**
     * addProductInfo
     * @param requestBody
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addProductInfoUsingPost(
        requestBody?: ProductInfoAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/productInfo/add',
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
     * deleteProductInfo
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteProductInfoUsingPost(
        requestBody?: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/productInfo/delete',
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
     * getProductInfoById
     * @param id id
     * @returns BaseResponse_ProductInfo_ OK
     * @throws ApiError
     */
    public static getProductInfoByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_ProductInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/productInfo/get',
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
     * listProductInfoBySearchTextPage
     * @param current
     * @param pageSize
     * @param searchText
     * @param sortField
     * @param sortOrder
     * @returns BaseResponse_Page_ProductInfo_ OK
     * @throws ApiError
     */
    public static listProductInfoBySearchTextPageUsingGet(
        current?: number,
        pageSize?: number,
        searchText?: string,
        sortField?: string,
        sortOrder?: string,
    ): CancelablePromise<BaseResponse_Page_ProductInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/productInfo/get/searchText',
            query: {
                'current': current,
                'pageSize': pageSize,
                'searchText': searchText,
                'sortField': sortField,
                'sortOrder': sortOrder,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listProductInfo
     * @param addPoints
     * @param current
     * @param description
     * @param name
     * @param pageSize
     * @param productType
     * @param sortField
     * @param sortOrder
     * @param total
     * @returns BaseResponse_List_ProductInfo_ OK
     * @throws ApiError
     */
    public static listProductInfoUsingGet(
        addPoints?: number,
        current?: number,
        description?: string,
        name?: string,
        pageSize?: number,
        productType?: string,
        sortField?: string,
        sortOrder?: string,
        total?: number,
    ): CancelablePromise<BaseResponse_List_ProductInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/productInfo/list',
            query: {
                'addPoints': addPoints,
                'current': current,
                'description': description,
                'name': name,
                'pageSize': pageSize,
                'productType': productType,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'total': total,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listProductInfoByPage
     * @param addPoints
     * @param current
     * @param description
     * @param name
     * @param pageSize
     * @param productType
     * @param sortField
     * @param sortOrder
     * @param total
     * @returns BaseResponse_Page_ProductInfo_ OK
     * @throws ApiError
     */
    public static listProductInfoByPageUsingGet(
        addPoints?: number,
        current?: number,
        description?: string,
        name?: string,
        pageSize?: number,
        productType?: string,
        sortField?: string,
        sortOrder?: string,
        total?: number,
    ): CancelablePromise<BaseResponse_Page_ProductInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/productInfo/list/page',
            query: {
                'addPoints': addPoints,
                'current': current,
                'description': description,
                'name': name,
                'pageSize': pageSize,
                'productType': productType,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'total': total,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * offlineProductInfo
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static offlineProductInfoUsingPost(
        requestBody?: IdRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/productInfo/offline',
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
     * onlineProductInfo
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static onlineProductInfoUsingPost(
        requestBody?: IdRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/productInfo/online',
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
     * updateProductInfo
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateProductInfoUsingPost(
        requestBody?: ProductInfoUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/productInfo/update',
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
