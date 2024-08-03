class Box extends Uint8Array {
  constructor() {
    super(new ArrayBuffer(8), 0, 8)
  }

  get sum() {
    return this.reduce((a, b) => a + b, 0)
  }
}

export default Box
