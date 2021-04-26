class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); //adding a message property to the class instance
    this.code = errorCode; //Adds a code property to instances based on this class
  }
}

module.exports = HttpError;
