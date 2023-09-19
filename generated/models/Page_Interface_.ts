/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Interface } from './Interface';
import type { OrderItem } from './OrderItem';

export type Page_Interface_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: Array<OrderItem>;
    pages?: number;
    records?: Array<Interface>;
    searchCount?: boolean;
    size?: number;
    total?: number;
};

