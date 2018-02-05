/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ImagePickerIOS
 * 
 */
'use strict';

var RCTImagePicker=require('NativeModules').ImagePickerIOS;

var ImagePickerIOS={
canRecordVideos:function canRecordVideos(callback){
return RCTImagePicker.canRecordVideos(callback);
},
canUseCamera:function canUseCamera(callback){
return RCTImagePicker.canUseCamera(callback);
},
openCameraDialog:function openCameraDialog(config,successCallback,cancelCallback){
config=babelHelpers.extends({
videoMode:false},
config);

return RCTImagePicker.openCameraDialog(config,successCallback,cancelCallback);
},
openSelectDialog:function openSelectDialog(config,successCallback,cancelCallback){
config=babelHelpers.extends({
showImages:true,
showVideos:false},
config);

return RCTImagePicker.openSelectDialog(config,successCallback,cancelCallback);
}};


module.exports=ImagePickerIOS;