const { TestWatcher } = require("@jest/core");
const matrix = require("./GameOfLife");

describe("Given a checkNeighbours function", () => {
  describe("when it receives a specific array and coordinates 0 and 2", () => {
    test("then it should return 1", () => {
      const input = [
        [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
      ];
      const i = 0;
      const j = 2;
      const expected = 1;
  
      const result = matrix.checkNeighbours(input, 0, 2);
  
      expect(result).toEqual(expected);
    });  
  });
  describe("When it receives a specific array and coordinates 0 and 0", () => {
    test("then it should return 0", () => {
      const input = [   
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
      ];
      const i = 0;
      const j = 0;
      const expected = 0;

      const result = matrix.checkNeighbours(input, 0, 0);

      expect(result).toEqual(expected);
    })
  })
});

describe("Given a checkMatrix function",  () => {
  describe("when it receives a specific array",  () => {
    test("then it should return a new array",  () => {
      const input = [   
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
        ];
      const expected =  [ 
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
      ];

      const result = matrix.checkMatrix(input);

      expect(result).toEqual(expected);
    });
  });
  describe("when it receives a specific array",  () => {
    test("then it should return a new array",  () => {
      const input = [   
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0]
        ];
      const expected =  [ 
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
      ];

      const result = matrix.checkMatrix(input);

      expect(result).toEqual(expected);
    });
  });
});