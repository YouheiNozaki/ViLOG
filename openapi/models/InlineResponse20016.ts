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
    InlineResponse20016Bookmark,
    InlineResponse20016BookmarkFromJSON,
    InlineResponse20016BookmarkFromJSONTyped,
    InlineResponse20016BookmarkToJSON,
    InlineResponse20016BookmarkTagMenu,
    InlineResponse20016BookmarkTagMenuFromJSON,
    InlineResponse20016BookmarkTagMenuFromJSONTyped,
    InlineResponse20016BookmarkTagMenuToJSON,
} from './';

/**
 * 成功時
 * @export
 * @interface InlineResponse20016
 */
export interface InlineResponse20016 {
    /**
     * 
     * @type {Array<InlineResponse20016Bookmark>}
     * @memberof InlineResponse20016
     */
    bookmark: Array<InlineResponse20016Bookmark>;
    /**
     * 
     * @type {Array<InlineResponse20016BookmarkTagMenu>}
     * @memberof InlineResponse20016
     */
    bookmarkTagMenu?: Array<InlineResponse20016BookmarkTagMenu>;
}

export function InlineResponse20016FromJSON(json: any): InlineResponse20016 {
    return InlineResponse20016FromJSONTyped(json, false);
}

export function InlineResponse20016FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse20016 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookmark': ((json['bookmark'] as Array<any>).map(InlineResponse20016BookmarkFromJSON)),
        'bookmarkTagMenu': !exists(json, 'bookmarkTagMenu') ? undefined : ((json['bookmarkTagMenu'] as Array<any>).map(InlineResponse20016BookmarkTagMenuFromJSON)),
    };
}

export function InlineResponse20016ToJSON(value?: InlineResponse20016 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookmark': ((value.bookmark as Array<any>).map(InlineResponse20016BookmarkToJSON)),
        'bookmarkTagMenu': value.bookmarkTagMenu === undefined ? undefined : ((value.bookmarkTagMenu as Array<any>).map(InlineResponse20016BookmarkTagMenuToJSON)),
    };
}


