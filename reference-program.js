class Calculator {
  constructor() {
    this.queue = [];
    this.result = 0;
  }

  add(value) {
    this.queue.push({ operation: 'add', value });
    return this;
  }

  sub(value) {
    this.queue.push({ operation: 'sub', value });
    return this;
  }

  mul(value) {
    this.queue.push({ operation: 'mul', value });
    return this;
  }

  delay(time) {
    this.queue.push({ operation: 'delay', time });
    return this;
  }

  equals(callback) {
    const executeNext = () => {
      if (this.queue.length === 0) {
        callback(this.result);
        return;
      }

      const operation = this.queue.shift();

      switch (operation.operation) {
        case 'add':
          this.result += operation.value;
          break;
        case 'sub':
          this.result -= operation.value;
          break;
        case 'mul':
          this.result *= operation.value;
          break;
        case 'delay':
          setTimeout(executeNext, operation.time);
          return;
        default:
          throw new Error(`Unsupported operation: ${operation.operation}`);
      }

      executeNext();
    };

    executeNext();

    return this;
  }
}

// Example usage:
const result = new Calculator()
  .add(5)
  .sub(3)
  .mul(2)
  .delay(1000)
  .add(10)
  .equals((result) => console.log(result)); // Output: 14 (after 1000ms delay)
