"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFiles = getFiles;
exports.getFile = getFile;

function getFiles(files) {
  return Promise.all(files.map(function (file) {
    return getFile(file);
  }));
} //take a single JavaScript File object


function getFile(file) {
  var reader = new FileReader();
  return new Promise(function (resolve, reject) {
    reader.onerror = function () {
      reader.abort();
      reject(new Error("Error parsing file"));
    };

    reader.onload = function () {
      //This will result in an array that will be recognized by C#.NET WebApi as a byte[]
      var bytes = Array.from(new Uint8Array(this.result)); //if you want the base64encoded file you would use the below line:

      var base64StringFile = btoa(bytes.map(function (item) {
        return String.fromCharCode(item);
      }).join("")); //Resolve the promise with your custom file structure

      resolve({
        bytes: bytes,
        base64StringFile: base64StringFile,
        fileName: file.name,
        fileType: file.type
      });
    };

    reader.readAsArrayBuffer(file);
  });
}