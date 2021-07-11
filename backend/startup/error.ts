class Error_ {
  private type: string = "";
  private description: string = "";
  private httpCode: number = 0;
  private timeStamp: Date = new Date();

  getError(): {
    type: string;
    description: string;
    httpCode: number;
    timeStamp: Date;
  } {
    return {
      type: this.type,
      description: this.description,
      httpCode: this.httpCode,
      timeStamp: this.timeStamp,
    };
  }
  setError(
    type: string,
    description: string,
    httpCode: number,
    timeStamp: Date
  ): void {
    this.type = type;
    this.description = description;
    this.httpCode = httpCode;
    this.timeStamp = timeStamp;
  }
}

export default Error_;
