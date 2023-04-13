# Cloudwpss23OpenapiCyan.DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiExternal**](DefaultApi.md#getApiExternal) | **GET** /api/external | Your GET endpoint
[**getUsersUserId**](DefaultApi.md#getUsersUserId) | **GET** /users/{userId} | Get User Info by User ID
[**optionsApiExternal**](DefaultApi.md#optionsApiExternal) | **OPTIONS** /api/external | 
[**patchUsersUserId**](DefaultApi.md#patchUsersUserId) | **PATCH** /users/{userId} | Update User Information
[**postUser**](DefaultApi.md#postUser) | **POST** /user | Create New User



## getApiExternal

> GetApiExternal200Response getApiExternal()

Your GET endpoint

### Example

```javascript
import Cloudwpss23OpenapiCyan from 'cloudwpss23_openapi_cyan';
let defaultClient = Cloudwpss23OpenapiCyan.ApiClient.instance;
// Configure OAuth2 access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cloudwpss23OpenapiCyan.DefaultApi();
apiInstance.getApiExternal((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetApiExternal200Response**](GetApiExternal200Response.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersUserId

> User getUsersUserId(userId)

Get User Info by User ID

Retrieve the information of the user with the matching user ID.

### Example

```javascript
import Cloudwpss23OpenapiCyan from 'cloudwpss23_openapi_cyan';
let defaultClient = Cloudwpss23OpenapiCyan.ApiClient.instance;
// Configure OAuth2 access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cloudwpss23OpenapiCyan.DefaultApi();
let userId = null; // Object | Id of an existing user.
apiInstance.getUsersUserId(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**Object**](.md)| Id of an existing user. | 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsApiExternal

> optionsApiExternal()



### Example

```javascript
import Cloudwpss23OpenapiCyan from 'cloudwpss23_openapi_cyan';
let defaultClient = Cloudwpss23OpenapiCyan.ApiClient.instance;
// Configure OAuth2 access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cloudwpss23OpenapiCyan.DefaultApi();
apiInstance.optionsApiExternal((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## patchUsersUserId

> User patchUsersUserId(userId, opts)

Update User Information

Update the information of an existing user.

### Example

```javascript
import Cloudwpss23OpenapiCyan from 'cloudwpss23_openapi_cyan';
let defaultClient = Cloudwpss23OpenapiCyan.ApiClient.instance;
// Configure OAuth2 access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cloudwpss23OpenapiCyan.DefaultApi();
let userId = null; // Object | Id of an existing user.
let opts = {
  'patchUsersUserIdRequest': {"firstName":"Rebecca"} // PatchUsersUserIdRequest | Patch user properties to update.
};
apiInstance.patchUsersUserId(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**Object**](.md)| Id of an existing user. | 
 **patchUsersUserIdRequest** | [**PatchUsersUserIdRequest**](PatchUsersUserIdRequest.md)| Patch user properties to update. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUser

> User postUser(opts)

Create New User

Create a new user.

### Example

```javascript
import Cloudwpss23OpenapiCyan from 'cloudwpss23_openapi_cyan';
let defaultClient = Cloudwpss23OpenapiCyan.ApiClient.instance;
// Configure OAuth2 access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Cloudwpss23OpenapiCyan.DefaultApi();
let opts = {
  'postUserRequest': {"firstName":"Bob","lastName":"Fellow","email":"bob.fellow@gmail.com","dateOfBirth":"1996-08-24"} // PostUserRequest | Post the necessary fields for the API to create a new user.
};
apiInstance.postUser(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserRequest** | [**PostUserRequest**](PostUserRequest.md)| Post the necessary fields for the API to create a new user. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

