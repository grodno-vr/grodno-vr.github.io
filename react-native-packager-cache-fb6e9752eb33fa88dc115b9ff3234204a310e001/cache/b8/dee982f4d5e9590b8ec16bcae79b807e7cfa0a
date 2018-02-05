/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Animated
 * 
 */
'use strict';


var AnimatedImplementation=require('AnimatedImplementation');
var Image=require('Image');
var Text=require('Text');
var View=require('View');

var AnimatedScrollView=void 0;

var Animated={
View:AnimatedImplementation.createAnimatedComponent(View),
Text:AnimatedImplementation.createAnimatedComponent(Text),
Image:AnimatedImplementation.createAnimatedComponent(Image),
get ScrollView(){
// Make this lazy to avoid circular reference.
if(!AnimatedScrollView){
AnimatedScrollView=AnimatedImplementation.createAnimatedComponent(require('ScrollView'));
}
return AnimatedScrollView;
}};


babelHelpers.extends(Animated,AnimatedImplementation);

module.exports=Animated;