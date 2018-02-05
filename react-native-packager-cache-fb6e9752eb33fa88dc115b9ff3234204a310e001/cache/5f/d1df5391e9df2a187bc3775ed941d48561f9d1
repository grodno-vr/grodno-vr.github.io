/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventSubscription
 * 
 */
'use strict';



/**
 * EventSubscription represents a subscription to a particular event. It can
 * remove its own subscription.
 */var
EventSubscription=function(){





/**
   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
   *   this subscription.
   */
function EventSubscription(subscriber){babelHelpers.classCallCheck(this,EventSubscription);
this.subscriber=subscriber;
}

/**
   * Removes this subscription from the subscriber that controls it.
   */babelHelpers.createClass(EventSubscription,[{key:"remove",value:function remove()
{
this.subscriber.removeSubscription(this);
}}]);return EventSubscription;}();


module.exports=EventSubscription;