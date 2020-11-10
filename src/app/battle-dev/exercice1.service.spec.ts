import { Exercice1Service } from './exercice1.service';

describe('Exercice1Service', () => {

  describe('When formatting the input', () => {
    let exercice1Service;
    beforeEach(() => {
      exercice1Service = new Exercice1Service();
    });

    it('should remove the first input', () => {
      // Arrange
      const inputs = ['3', '5 3', '3 2', '4 6'];
      const ExpectedInputs = ['5 3', '3 2', '4 6'];
      // Act
      const result = exercice1Service.removeFirstInput(inputs);
      // Assert
      expect(result).toEqual(ExpectedInputs);
    });

    it('should not modify the original input', () => {
      // TODO: implementer le test pour verifier qu'il ne modifie pas le tableau d'origine
    });

    it('should transform each turn to sub array', () => {
      // Arrange
      const inputValues = ['5 3', '3 2', '4 6'];
      const expectedInputValues = [['5', '3'], ['3', '2'], ['4', '6']];

      // Act
      const result = exercice1Service.createSubArray(inputValues);

      // Assert
      expect(result).toEqual(expectedInputValues);
    });

    it('should parse each turn score', () => {
      // Arrange
      const turnScore = ['5', '3'];
      const ExpectedTurnScore = [5, 3];
      // Act
      const result = exercice1Service.formatTurnScores(turnScore);
      // Assert
      expect(result).toEqual(ExpectedTurnScore);
    });

    it('should format the input values', () => {
      // Arrange
      const inputs = ['3', '5 3', '3 2', '4 6'];
      const expectedInputs = [[5, 3], [3, 2], [4, 6]];
      // Act
      const result = exercice1Service.formatInputs(inputs);
      // Assert
      expect(result).toEqual(expectedInputs);
    });
  });

  describe('When play is on', () => {
    let exercice1Service;
    beforeEach(() => {
      exercice1Service = new Exercice1Service();
    });

    it('should return array of number', () => {
      // Arrange
      const inputs = ['3', '5 3', '3 2', '4 6'];
      const expectedCardA = [5, 3, 4];
      const expectedCardB = [3, 2, 6];
      // Act
      exercice1Service.play(inputs);

      // Assert
      expect(exercice1Service.cardA).toEqual(expectedCardA);
      expect(exercice1Service.cardB).toEqual(expectedCardB);
    });

    it('should return Player B Winner', () => {
      const inputs = ['10', '10 3', '4 5', '6 10', '7 8', '4 8', '4 5', '10 2', '7 7', '10 7', '5 1'];

      const result = exercice1Service.getResult(inputs);

      expect(result).toEqual('B');
    });
  });
});
