
describe('Testing the calculateMonthlyPayment method', () => {

    it('should calculate the monthly rate', function () {
      expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 2.5})).toEqual('94.27');
      expect(calculateMonthlyPayment({amount: 1000000, years: 23, rate: 1})).toEqual('4057.32');
      expect(calculateMonthlyPayment({amount: 1000000, years: 23, rate: 0})).toEqual('3623.19');
    });
  
    it('should return a result with 2 decimal places', function() {
      expect(calculateMonthlyPayment({amount: 1000000, years: 23, rate: 1})).toBeCloseTo('4057.32', 2);
      expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 2.5})).toBeCloseTo('94.27', 2);
      expect(calculateMonthlyPayment({amount: 1000000, years: 23, rate: 0})).toBeCloseTo('3623.19', 2);
      expect(calculateMonthlyPayment({amount: 1000000, years: 23, rate: 0})).toBeCloseTo('3623.19', 2);
    });
  
  });
  /// etc
  