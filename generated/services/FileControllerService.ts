/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_ImageVo_ } from '../models/BaseResponse_ImageVo_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FileControllerService {

    /**
     * uploadFile
     * @param bizId bizId
     * @param biz biz
     * @param formData
     * @returns BaseResponse_ImageVo_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadFileUsingPost(
        bizId: number,
        biz: string,
        formData?: {
            /**
             * file
             */
            file: Blob;
        },
    ): CancelablePromise<BaseResponse_ImageVo_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file/upload',
            query: {
                'bizId': bizId,
                'biz': biz,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
