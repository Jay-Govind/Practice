let length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    callback.call(globalThis); // Use `globalThis` for compatibility across environments
  },
};

object.method(callback); // This will output 4
