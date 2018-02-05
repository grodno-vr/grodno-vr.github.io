/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SwipeableListViewDataSource
 */
'use strict';

var ListViewDataSource=require('ListViewDataSource');

/**
 * Data source wrapper around ListViewDataSource to allow for tracking of
 * which row is swiped open and close opened row(s) when another row is swiped
 * open.
 *
 * See https://github.com/facebook/react-native/pull/5602 for why
 * ListViewDataSource is not subclassed.
 */var
SwipeableListViewDataSource=function(){









function SwipeableListViewDataSource(params){var _this=this;babelHelpers.classCallCheck(this,SwipeableListViewDataSource);
this._dataSource=new ListViewDataSource({
getRowData:params.getRowData,
getSectionHeaderData:params.getSectionHeaderData,
rowHasChanged:function rowHasChanged(row1,row2){
/**
         * Row needs to be re-rendered if its swiped open/close status is
         * changed, or its data blob changed.
         */
return(
row1.id!==_this._previousOpenRowID&&row2.id===_this._openRowID||
row1.id===_this._previousOpenRowID&&row2.id!==_this._openRowID||
params.rowHasChanged(row1,row2));

},
sectionHeaderHasChanged:params.sectionHeaderHasChanged});

}babelHelpers.createClass(SwipeableListViewDataSource,[{key:"cloneWithRowsAndSections",value:function cloneWithRowsAndSections(


dataBlob,
sectionIdentities,
rowIdentities)
{
this._dataSource=this._dataSource.cloneWithRowsAndSections(
dataBlob,
sectionIdentities,
rowIdentities);


this._dataBlob=dataBlob;
this.rowIdentities=this._dataSource.rowIdentities;
this.sectionIdentities=this._dataSource.sectionIdentities;

return this;
}

// For the actual ListView to use
},{key:"getDataSource",value:function getDataSource(){
return this._dataSource;
}},{key:"getOpenRowID",value:function getOpenRowID()

{
return this._openRowID;
}},{key:"getFirstRowID",value:function getFirstRowID()

{
/**
     * If rowIdentities is specified, find the first data row from there since
     * we don't want to attempt to bounce section headers. If unspecified, find
     * the first data row from _dataBlob.
     */
if(this.rowIdentities){
return this.rowIdentities[0]&&this.rowIdentities[0][0];
}
return Object.keys(this._dataBlob)[0];
}},{key:"setOpenRowID",value:function setOpenRowID(

rowID){
this._previousOpenRowID=this._openRowID;
this._openRowID=rowID;

this._dataSource=this._dataSource.cloneWithRowsAndSections(
this._dataBlob,
this.sectionIdentities,
this.rowIdentities);


return this;
}}]);return SwipeableListViewDataSource;}();


module.exports=SwipeableListViewDataSource;