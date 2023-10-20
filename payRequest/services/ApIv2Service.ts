/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { R } from '../models/R';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from "../core/request";

export class ApIv2Service {

    /**
     * wxNotify
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static wxNotifyUsingPost(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/wx-pay-v2/native/notify',
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
    public static createNativeUsingPost(
        productId: number,
    ): CancelablePromise<R | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/wx-pay-v2/native/{productId}',
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

}
