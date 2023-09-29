/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderItem } from './OrderItem';
import type { ProductOrderVo } from './ProductOrderVo';

export type OrderVo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    optimizeJoinOfCountSql?: boolean;
    orders?: Array<OrderItem>;
    records?: Array<ProductOrderVo>;
    searchCount?: boolean;
    size?: number;
    total?: number;
};

