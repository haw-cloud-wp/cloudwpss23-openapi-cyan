/**
 * cloudwpss23-openapi-cyan
 * OpenAPI Reference für das CloudWP der HAW Hamburg für das SommerSemster 2023
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import GetApiExternal200Response from './model/GetApiExternal200Response';
import PatchUsersUserIdRequest from './model/PatchUsersUserIdRequest';
import PostUserRequest from './model/PostUserRequest';
import User from './model/User';
import DefaultApi from './api/DefaultApi';


/**
* OpenAPI Reference für das CloudWP der HAW Hamburg für das SommerSemster 2023.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Cloudwpss23OpenapiCyan = require('index'); // See note below*.
* var xxxSvc = new Cloudwpss23OpenapiCyan.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Cloudwpss23OpenapiCyan.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Cloudwpss23OpenapiCyan.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Cloudwpss23OpenapiCyan.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The GetApiExternal200Response model constructor.
     * @property {module:model/GetApiExternal200Response}
     */
    GetApiExternal200Response,

    /**
     * The PatchUsersUserIdRequest model constructor.
     * @property {module:model/PatchUsersUserIdRequest}
     */
    PatchUsersUserIdRequest,

    /**
     * The PostUserRequest model constructor.
     * @property {module:model/PostUserRequest}
     */
    PostUserRequest,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
