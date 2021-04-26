/* tslint:disable */
/* eslint-disable */
/**
 * chibichilo-server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse2003Learner,
    InlineResponse2003LearnerFromJSON,
    InlineResponse2003LearnerFromJSONTyped,
    InlineResponse2003LearnerToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2003Activities1
 */
export interface InlineResponse2003Activities1 {
    /**
     * 
     * @type {InlineResponse2003Learner}
     * @memberof InlineResponse2003Activities1
     */
    learner: InlineResponse2003Learner;
    /**
     * 
     * @type {InlineResponse2003Learner}
     * @memberof InlineResponse2003Activities1
     */
    topic?: InlineResponse2003Learner;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2003Activities1
     */
    completed: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003Activities1
     */
    totalTimeMs: number;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse2003Activities1
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse2003Activities1
     */
    updatedAt: Date;
}

export function InlineResponse2003Activities1FromJSON(json: any): InlineResponse2003Activities1 {
    return InlineResponse2003Activities1FromJSONTyped(json, false);
}

export function InlineResponse2003Activities1FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2003Activities1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'learner': InlineResponse2003LearnerFromJSON(json['learner']),
        'topic': !exists(json, 'topic') ? undefined : InlineResponse2003LearnerFromJSON(json['topic']),
        'completed': json['completed'],
        'totalTimeMs': json['totalTimeMs'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function InlineResponse2003Activities1ToJSON(value?: InlineResponse2003Activities1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'learner': InlineResponse2003LearnerToJSON(value.learner),
        'topic': InlineResponse2003LearnerToJSON(value.topic),
        'completed': value.completed,
        'totalTimeMs': value.totalTimeMs,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}


