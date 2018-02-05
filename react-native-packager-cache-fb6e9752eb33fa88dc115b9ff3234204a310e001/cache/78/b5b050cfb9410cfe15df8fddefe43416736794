/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * BackAndroid has been moved to BackHandler.  This stub calls BackHandler methods
 * after generating a warning to remind users to move to the new BackHandler module.
 *
 * @providesModule BackAndroid
 */

'use strict';

var BackHandler=require('BackHandler');

var warning=require('fbjs/lib/warning');

/**
 * Deprecated.  Use BackHandler instead.
 */
var BackAndroid={

exitApp:function exitApp(){
warning(false,'BackAndroid is deprecated.  Please use BackHandler instead.');
BackHandler.exitApp();
},

addEventListener:function addEventListener(
eventName,
handler)
{
warning(false,'BackAndroid is deprecated.  Please use BackHandler instead.');
return BackHandler.addEventListener(eventName,handler);
},

removeEventListener:function removeEventListener(
eventName,
handler)
{
warning(false,'BackAndroid is deprecated.  Please use BackHandler instead.');
BackHandler.removeEventListener(eventName,handler);
}};



module.exports=BackAndroid;