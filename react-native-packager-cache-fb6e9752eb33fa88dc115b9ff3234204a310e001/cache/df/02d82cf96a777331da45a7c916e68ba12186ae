/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ImageEditor
 * 
 */
'use strict';

var RCTImageEditingManager=require('NativeModules').ImageEditingManager;var




































ImageEditor=function(){function ImageEditor(){babelHelpers.classCallCheck(this,ImageEditor);}babelHelpers.createClass(ImageEditor,null,[{key:"cropImage",
/**
   * Crop the image specified by the URI param. If URI points to a remote
   * image, it will be downloaded automatically. If the image cannot be
   * loaded/downloaded, the failure callback will be called.
   *
   * If the cropping process is successful, the resultant cropped image
   * will be stored in the ImageStore, and the URI returned in the success
   * callback will point to the image in the store. Remember to delete the
   * cropped image from the ImageStore when you are done with it.
   */value:function cropImage(

uri,
cropData,
success,
failure)
{
RCTImageEditingManager.cropImage(uri,cropData,success,failure);
}}]);return ImageEditor;}();


module.exports=ImageEditor;