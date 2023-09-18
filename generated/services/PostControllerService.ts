/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_List_Post_ } from '../models/BaseResponse_List_Post_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_Post_ } from '../models/BaseResponse_Page_Post_';
import type { BaseResponse_Post_ } from '../models/BaseResponse_Post_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { PostAddRequest } from '../models/PostAddRequest';
import type { PostUpdateRequest } from '../models/PostUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostControllerService {

    /**
     * addPost
     * @param requestBody
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addPostUsingPost(
        requestBody?: PostAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/add',
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
     * deletePost
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deletePostUsingPost(
        requestBody?: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/delete',
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
     * getPostById
     * @param id id
     * @returns BaseResponse_Post_ OK
     * @throws ApiError
     */
    public static getPostByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_Post_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/post/get',
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
     * listPost
     * @param age
     * @param contact
     * @param content
     * @param current
     * @param education
     * @param gender
     * @param job
     * @param loveExp
     * @param pageSize
     * @param place
     * @param reviewStatus
     * @param sortField
     * @param sortOrder
     * @param userId
     * @returns BaseResponse_List_Post_ OK
     * @throws ApiError
     */
    public static listPostUsingGet(
        age?: number,
        contact?: string,
        content?: string,
        current?: number,
        education?: string,
        gender?: number,
        job?: string,
        loveExp?: string,
        pageSize?: number,
        place?: string,
        reviewStatus?: number,
        sortField?: string,
        sortOrder?: string,
        userId?: number,
    ): CancelablePromise<BaseResponse_List_Post_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/post/list',
            query: {
                'age': age,
                'contact': contact,
                'content': content,
                'current': current,
                'education': education,
                'gender': gender,
                'job': job,
                'loveExp': loveExp,
                'pageSize': pageSize,
                'place': place,
                'reviewStatus': reviewStatus,
                'sortField': sortField,
                'sortOrder': sortOrder,
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
     * listPostByPage
     * @param age
     * @param contact
     * @param content
     * @param current
     * @param education
     * @param gender
     * @param job
     * @param loveExp
     * @param pageSize
     * @param place
     * @param reviewStatus
     * @param sortField
     * @param sortOrder
     * @param userId
     * @returns BaseResponse_Page_Post_ OK
     * @throws ApiError
     */
    public static listPostByPageUsingGet(
        age?: number,
        contact?: string,
        content?: string,
        current?: number,
        education?: string,
        gender?: number,
        job?: string,
        loveExp?: string,
        pageSize?: number,
        place?: string,
        reviewStatus?: number,
        sortField?: string,
        sortOrder?: string,
        userId?: number,
    ): CancelablePromise<BaseResponse_Page_Post_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/post/list/page',
            query: {
                'age': age,
                'contact': contact,
                'content': content,
                'current': current,
                'education': education,
                'gender': gender,
                'job': job,
                'loveExp': loveExp,
                'pageSize': pageSize,
                'place': place,
                'reviewStatus': reviewStatus,
                'sortField': sortField,
                'sortOrder': sortOrder,
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
     * updatePost
     * @param requestBody
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updatePostUsingPost(
        requestBody?: PostUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/update',
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
