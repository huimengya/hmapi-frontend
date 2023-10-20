/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { R } from '../models/R';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class Service {

    /**
     * 获取账单url
     * @param billDate billDate
     * @param type type
     * @returns R OK
     * @throws ApiError
     */
    public static queryTradeBillUsingGet(
        billDate: string,
        type: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ali-pay/bill/downloadurl/query/{billDate}/{type}',
            path: {
                'billDate': billDate,
                'type': type,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 用户取消订单
     * @param orderNo orderNo
     * @returns R OK
     * @returns any Created
     * @throws ApiError
     */
    public static cancelUsingPost(
        orderNo: string,
    ): CancelablePromise<R | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ali-pay/trade/close/{orderNo}',
            path: {
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
     * 查询退款：测试用
     * @param orderNo orderNo
     * @returns R OK
     * @throws ApiError
     */
    public static queryRefundUsingGet(
        orderNo: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ali-pay/trade/fastpay/refund/{orderNo}',
            path: {
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
     * 支付通知
     * @param params params
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static tradeNotifyUsingPost(
        params: any,
    ): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ali-pay/trade/notify',
            query: {
                'params': params,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 统一收单下单并支付页面接口的调用
     * @param productId productId
     * @returns R OK
     * @returns any Created
     * @throws ApiError
     */
    public static tradePagePayUsingPost(
        productId: number,
    ): CancelablePromise<R | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ali-pay/trade/page/pay/{productId}',
            path: {
                'productId': productId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 查询订单：测试订单状态用
     * @param orderNo orderNo
     * @returns R OK
     * @throws ApiError
     */
    public static queryOrderUsingGet(
        orderNo: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ali-pay/trade/query/{orderNo}',
            path: {
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
     * 申请退款
     * @param orderNo orderNo
     * @param reason reason
     * @returns R OK
     * @returns any Created
     * @throws ApiError
     */
    public static refundsUsingPost(
        orderNo: string,
        reason: string,
    ): CancelablePromise<R | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ali-pay/trade/refund/{orderNo}/{reason}',
            path: {
                'orderNo': orderNo,
                'reason': reason,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 订单列表
     * @returns R OK
     * @throws ApiError
     */
    public static listUsingGet(): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order-info/list',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 查询本地订单状态
     * @param orderNo orderNo
     * @returns R OK
     * @throws ApiError
     */
    public static queryOrderStatusUsingGet(
        orderNo: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order-info/query-order-status/{orderNo}',
            path: {
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
     * 商品列表
     * @returns R OK
     * @throws ApiError
     */
    public static listUsingGet1(): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product/list',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 测试接口
     * @returns R OK
     * @throws ApiError
     */
    public static testUsingGet(): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product/test',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getWxPayConfig
     * @returns R OK
     * @throws ApiError
     */
    public static getWxPayConfigUsingGet(): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/test',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
