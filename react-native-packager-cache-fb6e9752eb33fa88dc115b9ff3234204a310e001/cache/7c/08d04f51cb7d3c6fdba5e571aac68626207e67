/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TaskQueue
 * 
 */
'use strict';

var infoLog=require('infoLog');
var invariant=require('fbjs/lib/invariant');











var DEBUG=false;

/**
 * TaskQueue - A system for queueing and executing a mix of simple callbacks and
 * trees of dependent tasks based on Promises. No tasks are executed unless
 * `processNext` is called.
 *
 * `enqueue` takes a Task object with either a simple `run` callback, or a
 * `gen` function that returns a `Promise` and puts it in the queue.  If a gen
 * function is supplied, then the promise it returns will block execution of
 * tasks already in the queue until it resolves. This can be used to make sure
 * the first task is fully resolved (including asynchronous dependencies that
 * also schedule more tasks via `enqueue`) before starting on the next task.
 * The `onMoreTasks` constructor argument is used to inform the owner that an
 * async task has resolved and that the queue should be processed again.
 *
 * Note: Tasks are only actually executed with explicit calls to `processNext`.
 */var
TaskQueue=function(){
/**
   * TaskQueue instances are self contained and independent, so multiple tasks
   * of varying semantics and priority can operate together.
   *
   * `onMoreTasks` is invoked when `PromiseTask`s resolve if there are more
   * tasks to process.
   */
function TaskQueue(_ref){var onMoreTasks=_ref.onMoreTasks;babelHelpers.classCallCheck(this,TaskQueue);
this._onMoreTasks=onMoreTasks;
this._queueStack=[{tasks:[],popable:false}];
}

/**
   * Add a task to the queue.  It is recommended to name your tasks for easier
   * async debugging. Tasks will not be executed until `processNext` is called
   * explicitly.
   */babelHelpers.createClass(TaskQueue,[{key:"enqueue",value:function enqueue(
task){
this._getCurrentQueue().push(task);
}},{key:"enqueueTasks",value:function enqueueTasks(

tasks){var _this=this;
tasks.forEach(function(task){return _this.enqueue(task);});
}},{key:"cancelTasks",value:function cancelTasks(

tasksToCancel){
// search through all tasks and remove them.
this._queueStack=this._queueStack.
map(function(queue){return babelHelpers.extends({},
queue,{
tasks:queue.tasks.filter(function(task){return tasksToCancel.indexOf(task)===-1;})});}).

filter(function(queue,idx){return queue.tasks.length>0||idx===0;});
}

/**
   * Check to see if `processNext` should be called.
   *
   * @returns {boolean} Returns true if there are tasks that are ready to be
   * processed with `processNext`, or returns false if there are no more tasks
   * to be processed right now, although there may be tasks in the queue that
   * are blocked by earlier `PromiseTask`s that haven't resolved yet.
   * `onMoreTasks` will be called after each `PromiseTask` resolves if there are
   * tasks ready to run at that point.
   */},{key:"hasTasksToProcess",value:function hasTasksToProcess()
{
return this._getCurrentQueue().length>0;
}

/**
   * Executes the next task in the queue.
   */},{key:"processNext",value:function processNext()
{
var queue=this._getCurrentQueue();
if(queue.length){
var task=queue.shift();
try{
if(task.gen){
DEBUG&&infoLog('genPromise for task '+task.name);
this._genPromise(task);// Rather than annoying tagged union
}else if(task.run){
DEBUG&&infoLog('run task '+task.name);
task.run();
}else{
invariant(
typeof task==='function',
'Expected Function, SimpleTask, or PromiseTask, but got:\n'+
JSON.stringify(task,null,2));

DEBUG&&infoLog('run anonymous task');
task();
}
}catch(e){
e.message='TaskQueue: Error with task '+(task.name||'')+': '+
e.message;
throw e;
}
}
}},{key:"_getCurrentQueue",value:function _getCurrentQueue()




{
var stackIdx=this._queueStack.length-1;
var queue=this._queueStack[stackIdx];
if(queue.popable&&
queue.tasks.length===0&&
this._queueStack.length>1){
this._queueStack.pop();
DEBUG&&infoLog('popped queue: ',{stackIdx:stackIdx,queueStackSize:this._queueStack.length});
return this._getCurrentQueue();
}else{
return queue.tasks;
}
}},{key:"_genPromise",value:function _genPromise(

task){var _this2=this;
// Each async task pushes it's own queue onto the queue stack. This
// effectively defers execution of previously queued tasks until the promise
// resolves, at which point we allow the new queue to be popped, which
// happens once it is fully processed.
this._queueStack.push({tasks:[],popable:false});
var stackIdx=this._queueStack.length-1;
DEBUG&&infoLog('push new queue: ',{stackIdx:stackIdx});
DEBUG&&infoLog('exec gen task '+task.name);
task.gen().
then(function(){
DEBUG&&infoLog(
'onThen for gen task '+task.name,
{stackIdx:stackIdx,queueStackSize:_this2._queueStack.length});

_this2._queueStack[stackIdx].popable=true;
_this2.hasTasksToProcess()&&_this2._onMoreTasks();
}).
catch(function(ex){
ex.message="TaskQueue: Error resolving Promise in task "+task.name+": "+ex.message;
throw ex;
}).
done();
}}]);return TaskQueue;}();



module.exports=TaskQueue;