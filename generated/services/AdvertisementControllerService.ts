/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdvertisementAddRequest } from '../models/AdvertisementAddRequest';
import type { AdvertisementQueryRequest } from '../models/AdvertisementQueryRequest';
import type { AdvertisementUpdateAvatarRequest } from '../models/AdvertisementUpdateAvatarRequest';
import type { AdvertisementUpdateRequest } from '../models/AdvertisementUpdateRequest';
import type { BaseResponse_Advertisement_ } from '../models/BaseResponse_Advertisement_';
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_List_AdVO_ } from '../models/BaseResponse_List_AdVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_Advertisement_ } from '../models/BaseResponse_Page_Advertisement_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { IdRequest } from '../models/IdRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdvertisementControllerService {

    /**
     * addAdvertisement
     * @param requestBody
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addAdvertisementUsingPost(
        requestBody?: AdvertisementAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ad/add',
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
     * deleteAdvertisement
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteAdvertisementUsingPost(
        requestBody?: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ad/delete',
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
     * getAdvertisementById
     * @param id id
     * @returns BaseResponse_Advertisement_ OK
     * @throws ApiError
     */
    public static getAdvertisementByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_Advertisement_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ad/get',
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
     * listAdvertisement
     * @returns BaseResponse_List_AdVO_ OK
     * @throws ApiError
     */
    public static listAdvertisementUsingGet(): CancelablePromise<BaseResponse_List_AdVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ad/get/online',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listAdvertisementByPage
     * @param requestBody
     * @returns BaseResponse_Page_Advertisement_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listAdvertisementByPageUsingPost(
        requestBody?: AdvertisementQueryRequest,
    ): CancelablePromise<BaseResponse_Page_Advertisement_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ad/list/page',
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
     * offlineAdvertisement
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static offlineAdvertisementUsingPost(
        requestBody?: IdRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ad/offline',
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
     * onlineAdvertisement
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static onlineAdvertisementUsingPost(
        requestBody?: IdRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ad/online',
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
     * updateAdvertisement
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAdvertisementUsingPost(
        requestBody?: AdvertisementUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ad/update',
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
     * updateAdvertisementAvatarUrl
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAdvertisementAvatarUrlUsingPost(
        requestBody?: AdvertisementUpdateAvatarRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ad/updateAdvertisementAvatar',
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
