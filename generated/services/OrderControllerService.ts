/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_OrderVo_ } from '../models/BaseResponse_OrderVo_';
import type { BaseResponse_ProductOrderVo_ } from '../models/BaseResponse_ProductOrderVo_';
import type { PayCreateRequest } from '../models/PayCreateRequest';
import type { ProductOrderQueryRequest } from '../models/ProductOrderQueryRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrderControllerService {

    /**
     * closedProductOrder
     * @param orderNo orderNo
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static closedProductOrderUsingPost(
        orderNo?: string,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/closed',
            query: {
                'orderNo': orderNo,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * createOrder
     * @param requestBody
     * @returns BaseResponse_ProductOrderVo_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static createOrderUsingPost(
        requestBody?: PayCreateRequest,
    ): CancelablePromise<BaseResponse_ProductOrderVo_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/create',
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
     * deleteProductOrder
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteProductOrderUsingPost(
        id?: number,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/delete',
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
     * getProductOrderById
     * @param id id
     * @returns BaseResponse_ProductOrderVo_ OK
     * @throws ApiError
     */
    public static getProductOrderByIdUsingGet(
        id?: string,
    ): CancelablePromise<BaseResponse_ProductOrderVo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/get',
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
     * listProductOrderByPage
     * @param addPoints
     * @param current
     * @param orderName
     * @param orderNo
     * @param pageSize
     * @param payType
     * @param productInfo
     * @param sortField
     * @param sortOrder
     * @param status
     * @param total
     * @returns BaseResponse_OrderVo_ OK
     * @throws ApiError
     */
    public static listProductOrderByPageUsingGet(
        addPoints?: number,
        current?: number,
        orderName?: string,
        orderNo?: string,
        pageSize?: number,
        payType?: string,
        productInfo?: string,
        sortField?: string,
        sortOrder?: string,
        status?: string,
        total?: number,
    ): CancelablePromise<BaseResponse_OrderVo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/list/page',
            query: {
                'addPoints': addPoints,
                'current': current,
                'orderName': orderName,
                'orderNo': orderNo,
                'pageSize': pageSize,
                'payType': payType,
                'productInfo': productInfo,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
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
     * parseOrderNotifyResult
     * @param requestBody
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static parseOrderNotifyResultUsingPost(
        requestBody?: string,
    ): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/notify/order',
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
     * queryOrderStatus
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static queryOrderStatusUsingPost(
        requestBody?: ProductOrderQueryRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/query/status',
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
