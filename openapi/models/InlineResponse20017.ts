/* tslint:disable */
/* eslint-disable */
/**
 * chibichilo-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse20016Tag,
    InlineResponse20016TagFromJSON,
    InlineResponse20016TagFromJSONTyped,
    InlineResponse20016TagToJSON,
} from './';

/**
 * 成功時
 * @export
 * @interface InlineResponse20017
 */
export interface InlineResponse20017 {
    /**
     * 
     * @type {Array<InlineResponse20016Tag>}
     * @memberof InlineResponse20017
     */
    bookmarkTagMenu: Array<InlineResponse20016Tag>;
}

export function InlineResponse20017FromJSON(json: any): InlineResponse20017 {
    return InlineResponse20017FromJSONTyped(json, false);
}

export function InlineResponse20017FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse20017 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookmarkTagMenu': ((json['bookmarkTagMenu'] as Array<any>).map(InlineResponse20016TagFromJSON)),
    };
}

export function InlineResponse20017ToJSON(value?: InlineResponse20017 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookmarkTagMenu': ((value.bookmarkTagMenu as Array<any>).map(InlineResponse20016TagToJSON)),
    };
}


