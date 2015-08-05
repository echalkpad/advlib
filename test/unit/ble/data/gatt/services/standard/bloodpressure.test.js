/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var bloodpressure = require("../../../../../../../lib/ble/data/gatt/"+
                                         "services/standard/bloodpressure.js");
var assert = require('assert'); 


// Inputs for the scenario
var INPUT_DATA = {
  serviceData: { 
    uuid: "1810",
    data: "1204eb150000" 
  }
};

// Expected outputs for the scenario
var EXPECTED_DATA = {
  serviceData: {
    uuid: "1810",
    data: "1204eb150000",
    standard: "Blood Pressure"
  }
};

describe('ble data gatt standard bloodpressure', function() {

  // Test the process function
  it('should parse BLE advertiser data bloodpressure', function() {
    var advertiserData = INPUT_DATA;
    bloodpressure.process(advertiserData);
    assert.deepEqual(advertiserData, EXPECTED_DATA);
  });
});