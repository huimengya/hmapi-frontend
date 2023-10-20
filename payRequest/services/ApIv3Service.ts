/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { R } from '../models/R';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApIv3Service {

    /**
     * 用户取消订单
     * @param orderNo orderNo
     * @returns R OK
     * @returns any Created
     * @throws ApiError
     */
    public static cancelUsingPost1(
        orderNo: string,
    ): CancelablePromise<R | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/wx-pay/cancel/{orderNo}',
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
     * 下载账单
     * @param billDate billDate
     * @param type type
     * @returns R OK
     * @throws ApiError
     */
    public static downloadBillUsingGet(
        billDate: string,
        type: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/wx-pay/downloadbill/{billDate}/{type}',
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
     * 支付通知
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static nativeNotifyUsingPost(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/wx-pay/native/notify',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 调用统一下单API，生成支付二维码
     * @param productId productId
     * @returns R OK
     * @returns any Created
     * @throws ApiError
     */
    public static nativePayUsingPost(
        productId: number,
    ): CancelablePromise<R | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/wx-pay/native/{productId}',
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
     * 查询退款：测试用
     * @param refundNo refundNo
     * @returns R OK
     * @throws ApiError
     */
    public static queryRefundUsingGet1(
        refundNo: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/wx-pay/query-refund/{refundNo}',
            path: {
                'refundNo': refundNo,
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
    public static queryOrderUsingGet1(
        orderNo: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/wx-pay/query/{orderNo}',
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
     * 获取账单url：测试用
     * @param billDate billDate
     * @param type type
     * @returns R OK
     * @throws ApiError
     */
    public static queryTradeBillUsingGet1(
        billDate: string,
        type: string,
    ): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/wx-pay/querybill/{billDate}/{type}',
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
     * 退款结果通知
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static refundsNotifyUsingPost(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/wx-pay/refunds/notify',
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
    public static refundsUsingPost1(
        orderNo: string,
        reason: string,
    ): CancelablePromise<R | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/wx-pay/refunds/{orderNo}/{reason}',
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

}
