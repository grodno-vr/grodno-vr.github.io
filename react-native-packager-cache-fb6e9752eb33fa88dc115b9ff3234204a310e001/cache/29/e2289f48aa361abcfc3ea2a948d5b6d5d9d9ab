/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BugReporting
 * 
 */
'use strict';

var RCTDeviceEventEmitter=require('RCTDeviceEventEmitter');
var Map=require('Map');
var infoLog=require('infoLog');







function defaultExtras(){
BugReporting.addFileSource('react_hierarchy.txt',function(){return require('dumpReactTree')();});
}

/**
 * A simple class for collecting bug report data. Components can add sources that will be queried when a bug report
 * is created via `collectExtraData`. For example, a list component might add a source that provides the list of rows
 * that are currently visible on screen. Components should also remember to call `remove()` on the object that is
 * returned by `addSource` when they are unmounted.
 */var
BugReporting=function(){function BugReporting(){babelHelpers.classCallCheck(this,BugReporting);}babelHelpers.createClass(BugReporting,null,[{key:"_maybeInit",value:function _maybeInit()




{
if(!BugReporting._subscription){
BugReporting._subscription=RCTDeviceEventEmitter.
addListener('collectBugExtraData',BugReporting.collectExtraData,null);
defaultExtras();
}
}

/**
   * Maps a string key to a simple callback that should return a string payload to be attached
   * to a bug report. Source callbacks are called when `collectExtraData` is called.
   *
   * Returns an object to remove the source when the component unmounts.
   *
   * Conflicts trample with a warning.
   */},{key:"addSource",value:function addSource(
key,callback){
return this._addSource(key,callback,BugReporting._extraSources);
}

/**
   * Maps a string key to a simple callback that should return a string payload to be attached
   * to a bug report. Source callbacks are called when `collectExtraData` is called.
   *
   * Returns an object to remove the source when the component unmounts.
   *
   * Conflicts trample with a warning.
   */},{key:"addFileSource",value:function addFileSource(
key,callback){
return this._addSource(key,callback,BugReporting._fileSources);
}},{key:"_addSource",value:function _addSource(

key,callback,source){
BugReporting._maybeInit();
if(source.has(key)){
console.warn("BugReporting.add* called multiple times for same key '"+key+"'");
}
source.set(key,callback);
return{remove:function remove(){source.delete(key);}};
}

/**
   * This can be called from a native bug reporting flow, or from JS code.
   *
   * If available, this will call `NativeModules.BugReporting.setExtraData(extraData)`
   * after collecting `extraData`.
   */},{key:"collectExtraData",value:function collectExtraData()
{
var extraData={};
for(var _iterator=BugReporting._extraSources,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref3;if(_isArray){if(_i>=_iterator.length)break;_ref3=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref3=_i.value;}var _ref=_ref3;var _ref2=babelHelpers.slicedToArray(_ref,2);var _key=_ref2[0];var callback=_ref2[1];
extraData[_key]=callback();
}
var fileData={};
for(var _iterator2=BugReporting._fileSources,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref6;if(_isArray2){if(_i2>=_iterator2.length)break;_ref6=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref6=_i2.value;}var _ref4=_ref6;var _ref5=babelHelpers.slicedToArray(_ref4,2);var _key2=_ref5[0];var _callback=_ref5[1];
fileData[_key2]=_callback();
}
infoLog('BugReporting extraData:',extraData);
var BugReportingNativeModule=require('NativeModules').BugReporting;
BugReportingNativeModule&&
BugReportingNativeModule.setExtraData&&
BugReportingNativeModule.setExtraData(extraData,fileData);

return{extras:extraData,files:fileData};
}}]);return BugReporting;}();BugReporting._extraSources=new Map();BugReporting._fileSources=new Map();BugReporting._subscription=null;


module.exports=BugReporting;