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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Cloudwpss23OpenapiCyan);
  }
}(this, function(expect, Cloudwpss23OpenapiCyan) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Cloudwpss23OpenapiCyan.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('getApiExternal', function() {
      it('should call getApiExternal successfully', function(done) {
        //uncomment below and update the code to test getApiExternal
        //instance.getApiExternal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersUserId', function() {
      it('should call getUsersUserId successfully', function(done) {
        //uncomment below and update the code to test getUsersUserId
        //instance.getUsersUserId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('optionsApiExternal', function() {
      it('should call optionsApiExternal successfully', function(done) {
        //uncomment below and update the code to test optionsApiExternal
        //instance.optionsApiExternal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchUsersUserId', function() {
      it('should call patchUsersUserId successfully', function(done) {
        //uncomment below and update the code to test patchUsersUserId
        //instance.patchUsersUserId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUser', function() {
      it('should call postUser successfully', function(done) {
        //uncomment below and update the code to test postUser
        //instance.postUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
