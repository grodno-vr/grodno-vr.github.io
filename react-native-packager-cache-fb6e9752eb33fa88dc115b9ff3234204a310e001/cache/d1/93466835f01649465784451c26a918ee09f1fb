/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EmitterSubscription
 * @noflow
 */
'use strict';

var EventSubscription=require('EventSubscription');




/**
 * EmitterSubscription represents a subscription with listener and context data.
 */var
EmitterSubscription=function(_EventSubscription){babelHelpers.inherits(EmitterSubscription,_EventSubscription);





/**
   * @param {EventEmitter} emitter - The event emitter that registered this
   *   subscription
   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
   *   this subscription
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */
function EmitterSubscription(
emitter,
subscriber,
listener,
context)
{babelHelpers.classCallCheck(this,EmitterSubscription);var _this=babelHelpers.possibleConstructorReturn(this,(EmitterSubscription.__proto__||Object.getPrototypeOf(EmitterSubscription)).call(this,
subscriber));
_this.emitter=emitter;
_this.listener=listener;
_this.context=context;return _this;
}

/**
   * Removes this subscription from the emitter that registered it.
   * Note: we're overriding the `remove()` method of EventSubscription here
   * but deliberately not calling `super.remove()` as the responsibility
   * for removing the subscription lies with the EventEmitter.
   */babelHelpers.createClass(EmitterSubscription,[{key:"remove",value:function remove()
{
this.emitter.removeSubscription(this);
}}]);return EmitterSubscription;}(EventSubscription);


module.exports=EmitterSubscription;