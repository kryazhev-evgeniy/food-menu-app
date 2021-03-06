export function getFiles(files) {
  return Promise.all(files.map(file => getFile(file)));
}

//take a single JavaScript File object
export function getFile(file) {
  var reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new Error("Error parsing file"));
    };
    reader.onload = function() {
      //This will result in an array that will be recognized by C#.NET WebApi as a byte[]
      let bytes = Array.from(new Uint8Array(this.result));

      //if you want the base64encoded file you would use the below line:
      let base64StringFile = btoa(
        bytes.map(item => String.fromCharCode(item)).join("")
      );

      //Resolve the promise with your custom file structure
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
