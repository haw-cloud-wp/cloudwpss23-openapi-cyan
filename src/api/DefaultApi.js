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


import ApiClient from "../ApiClient";
import GetApiExternal200Response from '../model/GetApiExternal200Response';
import PatchUsersUserIdRequest from '../model/PatchUsersUserIdRequest';
import PostUserRequest from '../model/PostUserRequest';
import User from '../model/User';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getApiExternal operation.
     * @callback module:api/DefaultApi~getApiExternalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetApiExternal200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Your GET endpoint
     * @param {module:api/DefaultApi~getApiExternalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetApiExternal200Response}
     */
    getApiExternal(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetApiExternal200Response;
      return this.apiClient.callApi(
        '/api/external', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersUserId operation.
     * @callback module:api/DefaultApi~getUsersUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Info by User ID
     * Retrieve the information of the user with the matching user ID.
     * @param {Object} userId Id of an existing user.
     * @param {module:api/DefaultApi~getUsersUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    getUsersUserId(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUsersUserId");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the optionsApiExternal operation.
     * @callback module:api/DefaultApi~optionsApiExternalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/DefaultApi~optionsApiExternalCallback} callback The callback function, accepting three arguments: error, data, response
     */
    optionsApiExternal(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/external', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchUsersUserId operation.
     * @callback module:api/DefaultApi~patchUsersUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Information
     * Update the information of an existing user.
     * @param {Object} userId Id of an existing user.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchUsersUserIdRequest} opts.patchUsersUserIdRequest Patch user properties to update.
     * @param {module:api/DefaultApi~patchUsersUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    patchUsersUserId(userId, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchUsersUserIdRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling patchUsersUserId");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/users/{userId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUser operation.
     * @callback module:api/DefaultApi~postUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create New User
     * Create a new user.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserRequest} opts.postUserRequest Post the necessary fields for the API to create a new user.
     * @param {module:api/DefaultApi~postUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    postUser(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}