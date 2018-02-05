/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AssetRegistry
 * 
 */
'use strict';















var assets=[];

function registerAsset(asset){
// `push` returns new array length, so the first asset will
// get id 1 (not 0) to make the value truthy
return assets.push(asset);
}

function getAssetByID(assetId){
return assets[assetId-1];
}

module.exports={registerAsset:registerAsset,getAssetByID:getAssetByID};