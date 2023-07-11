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
import {
    InlineResponse20014Book,
    InlineResponse20014BookFromJSON,
    InlineResponse20014BookFromJSONTyped,
    InlineResponse20014BookToJSON,
    InlineResponse2008Learner,
    InlineResponse2008LearnerFromJSON,
    InlineResponse2008LearnerFromJSONTyped,
    InlineResponse2008LearnerToJSON,
    InlineResponse2008TimeRanges,
    InlineResponse2008TimeRangesFromJSON,
    InlineResponse2008TimeRangesFromJSONTyped,
    InlineResponse2008TimeRangesToJSON,
    InlineResponse2008Topic,
    InlineResponse2008TopicFromJSON,
    InlineResponse2008TopicFromJSONTyped,
    InlineResponse2008TopicToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse20014BookActivities
 */
export interface InlineResponse20014BookActivities {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20014BookActivities
     */
    id?: number;
    /**
     * 
     * @type {InlineResponse2008Learner}
     * @memberof InlineResponse20014BookActivities
     */
    learner: InlineResponse2008Learner;
    /**
     * 
     * @type {InlineResponse2008Topic}
     * @memberof InlineResponse20014BookActivities
     */
    topic: InlineResponse2008Topic;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse20014BookActivities
     */
    completed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse20014BookActivities
     */
    totalTimeMs?: number;
    /**
     * 
     * @type {Array<InlineResponse2008TimeRanges>}
     * @memberof InlineResponse20014BookActivities
     */
    timeRanges?: Array<InlineResponse2008TimeRanges>;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse20014BookActivities
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof InlineResponse20014BookActivities
     */
    updatedAt?: Date;
    /**
     * 
     * @type {InlineResponse20014Book}
     * @memberof InlineResponse20014BookActivities
     */
    book: InlineResponse20014Book;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse20014BookActivities
     */
    status: InlineResponse20014BookActivitiesStatusEnum;
}

export function InlineResponse20014BookActivitiesFromJSON(json: any): InlineResponse20014BookActivities {
    return InlineResponse20014BookActivitiesFromJSONTyped(json, false);
}

export function InlineResponse20014BookActivitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse20014BookActivities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'learner': InlineResponse2008LearnerFromJSON(json['learner']),
        'topic': InlineResponse2008TopicFromJSON(json['topic']),
        'completed': !exists(json, 'completed') ? undefined : json['completed'],
        'totalTimeMs': !exists(json, 'totalTimeMs') ? undefined : json['totalTimeMs'],
        'timeRanges': !exists(json, 'timeRanges') ? undefined : ((json['timeRanges'] as Array<any>).map(InlineResponse2008TimeRangesFromJSON)),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'book': InlineResponse20014BookFromJSON(json['book']),
        'status': json['status'],
    };
}

export function InlineResponse20014BookActivitiesToJSON(value?: InlineResponse20014BookActivities | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'learner': InlineResponse2008LearnerToJSON(value.learner),
        'topic': InlineResponse2008TopicToJSON(value.topic),
        'completed': value.completed,
        'totalTimeMs': value.totalTimeMs,
        'timeRanges': value.timeRanges === undefined ? undefined : ((value.timeRanges as Array<any>).map(InlineResponse2008TimeRangesToJSON)),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'book': InlineResponse20014BookToJSON(value.book),
        'status': value.status,
    };
}

/**
* @export
* @enum {string}
*/
export enum InlineResponse20014BookActivitiesStatusEnum {
    completed = 'completed',
    incompleted = 'incompleted',
    unopened = 'unopened'
}


