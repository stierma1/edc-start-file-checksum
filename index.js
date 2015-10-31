"use strict"

var StartingPoint = require("basic-distributed-computation").StartingPoint;
var Request = require("basic-distributed-computation").Request;
var uuid = require("uuid");

class FileCheckSumSP extends StartingPoint {
  constructor(){
    super("file-checksum");
    this.add(0, "readfile");
    this.add(1, "checksum");
  }

  createRequest(payload){
    var req = super.createRequest(payload, Request);
    req.correlationId = uuid.v4();
    return req;
  }
}

module.exports = new FileCheckSumSP();
