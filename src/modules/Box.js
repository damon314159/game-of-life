class Box extends Uint8Array {
  // No magic numbers, but this is always 8 due to bit packing
  static #BOX_LEN = 8

  // No magic numbers, but this is always 0b1000_0000 due to bit packing
  static #MOST_SIG_BIT = 1 << (Box.#BOX_LEN - 1)

  constructor() {
    // Construct an array of 8 bytes. Each byte is 8 bits
    // This gives an 8 x 8 grid of bits, representing an 8 x 8 box of alive/dead cells
    super(new ArrayBuffer(Box.#BOX_LEN), 0, Box.#BOX_LEN)
  }

  // Get the state of the cell at (row, col) in the box
  get(row, col) {
    // Mask the bit at col position in the row
    const masked = this[row] & (Box.#MOST_SIG_BIT >> col)
    // 0 or 1
    return masked && 1
  }

  // Check if any cells are alive by summing the bytes. Any alive cell will make the sum non-zero
  get isEmpty() {
    const byteSum = this.reduce((a, b) => a + b, 0)
    return byteSum === 0
  }
}

export default Box
