/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule StyleSheetPropType
 * 
 */
'use strict';

var createStrictShapeTypeChecker=require('createStrictShapeTypeChecker');
var flattenStyle=require('flattenStyle');

function StyleSheetPropType(
shape)
{
var shapePropType=createStrictShapeTypeChecker(shape);
return function(props,propName,componentName,location){
var newProps=props;
if(props[propName]){
// Just make a dummy prop object with only the flattened style
newProps={};
newProps[propName]=flattenStyle(props[propName]);
}for(var _len=arguments.length,rest=Array(_len>4?_len-4:0),_key=4;_key<_len;_key++){rest[_key-4]=arguments[_key];}
return shapePropType.apply(undefined,[newProps,propName,componentName,location].concat(rest));
};
}

module.exports=StyleSheetPropType;