/* tslint:disable */
/* eslint-disable */
/**
 * chibichilo-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InlineResponse2008Topic
 */
export interface InlineResponse2008Topic {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2008Topic
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2008Topic
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2008Topic
     */
    timeRequired: number;
}

export function InlineResponse2008TopicFromJSON(json: any): InlineResponse2008Topic {
    return InlineResponse2008TopicFromJSONTyped(json, false);
}

export function InlineResponse2008TopicFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2008Topic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'timeRequired': json['timeRequired'],
    };
}

export function InlineResponse2008TopicToJSON(value?: InlineResponse2008Topic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'timeRequired': value.timeRequired,
    };
}


