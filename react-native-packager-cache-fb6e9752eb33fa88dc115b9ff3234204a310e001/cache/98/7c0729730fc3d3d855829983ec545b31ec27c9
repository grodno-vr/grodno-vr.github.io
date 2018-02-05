/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule defineLazyObjectProperty
 * 
 */

'use strict';

/**
 * Defines a lazily evaluated property on the supplied `object`.
 */
function defineLazyObjectProperty(
object,
name,
descriptor)




{var
get=descriptor.get;
var enumerable=descriptor.enumerable!==false;
var writable=descriptor.writable!==false;

var value=void 0;
var valueSet=false;
function getValue(){
// WORKAROUND: A weird infinite loop occurs where calling `getValue` calls
// `setValue` which calls `Object.defineProperty` which somehow triggers
// `getValue` again. Adding `valueSet` breaks this loop.
if(!valueSet){
// Calling `get()` here can trigger an infinite loop if it fails to
// remove the getter on the property, which can happen when executing
// JS in a V8 context.  `valueSet = true` will break this loop, and
// sets the value of the property to undefined, until the code in `get()`
// finishes, at which point the property is set to the correct value.
valueSet=true;
setValue(get());
}
return value;
}
function setValue(newValue){
value=newValue;
valueSet=true;
Object.defineProperty(object,name,{
value:newValue,
configurable:true,
enumerable:enumerable,
writable:writable});

}

Object.defineProperty(object,name,{
get:getValue,
set:setValue,
configurable:true,
enumerable:enumerable});

}

module.exports=defineLazyObjectProperty;