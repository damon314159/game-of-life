class Box extends Uint8Array {
  constructor() {
    // Construct an array of 8 bytes. Each byte is 8 bits
    // This gives an 8 x 8 grid of bits, representing an 8 x 8 box of alive/dead cells
    super(new ArrayBuffer(8), 0, 8)
  }

  // Check if any cells are alive by summing the bytes. Any alive cell will make the sum non-zero
  get isEmpty() {
    const byteSum = this.reduce((a, b) => a + b, 0)
    return byteSum === 0
  }
}

export default Box
