/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ImageStore
 * 
 */
'use strict';

var RCTImageStoreManager=require('NativeModules').ImageStoreManager;var

ImageStore=function(){function ImageStore(){babelHelpers.classCallCheck(this,ImageStore);}babelHelpers.createClass(ImageStore,null,[{key:"hasImageForTag",
/**
   * Check if the ImageStore contains image data for the specified URI.
   * @platform ios
   */value:function hasImageForTag(
uri,callback){
if(RCTImageStoreManager.hasImageForTag){
RCTImageStoreManager.hasImageForTag(uri,callback);
}else{
console.warn('hasImageForTag() not implemented');
}
}

/**
   * Delete an image from the ImageStore. Images are stored in memory and
   * must be manually removed when you are finished with them, otherwise they
   * will continue to use up RAM until the app is terminated. It is safe to
   * call `removeImageForTag()` without first calling `hasImageForTag()`, it
   * will simply fail silently.
   * @platform ios
   */},{key:"removeImageForTag",value:function removeImageForTag(
uri){
if(RCTImageStoreManager.removeImageForTag){
RCTImageStoreManager.removeImageForTag(uri);
}else{
console.warn('removeImageForTag() not implemented');
}
}

/**
   * Stores a base64-encoded image in the ImageStore, and returns a URI that
   * can be used to access or display the image later. Images are stored in
   * memory only, and must be manually deleted when you are finished with
   * them by calling `removeImageForTag()`.
   *
   * Note that it is very inefficient to transfer large quantities of binary
   * data between JS and native code, so you should avoid calling this more
   * than necessary.
   * @platform ios
   */},{key:"addImageFromBase64",value:function addImageFromBase64(

base64ImageData,
success,
failure)
{
RCTImageStoreManager.addImageFromBase64(base64ImageData,success,failure);
}

/**
   * Retrieves the base64-encoded data for an image in the ImageStore. If the
   * specified URI does not match an image in the store, the failure callback
   * will be called.
   *
   * Note that it is very inefficient to transfer large quantities of binary
   * data between JS and native code, so you should avoid calling this more
   * than necessary. To display an image in the ImageStore, you can just pass
   * the URI to an `<Image/>` component; there is no need to retrieve the
   * base64 data.
   */},{key:"getBase64ForTag",value:function getBase64ForTag(

uri,
success,
failure)
{
RCTImageStoreManager.getBase64ForTag(uri,success,failure);
}}]);return ImageStore;}();


module.exports=ImageStore;