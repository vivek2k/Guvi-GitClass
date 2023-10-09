class UberPriceCalculator {
    constructor(baseRate, ratePerKm, baseRatePerMinute, ratePerMinute) {
      this.baseRate = baseRate;
      this.ratePerKm = ratePerKm;
      this.baseRatePerMinute = baseRatePerMinute;
      this.ratePerMinute = ratePerMinute;
    }
  
    calculatePrice(distanceInKm, timeInMinutes) {
      const priceFromDistance = this.baseRate + this.ratePerKm * distanceInKm;
      const priceFromTime = this.baseRatePerMinute + this.ratePerMinute * timeInMinutes;
      return priceFromDistance + priceFromTime;                                             //uber calculates price based on distance and time 
    }
  }
  
  // Example usage
  const calculator = new UberPriceCalculator(50, 10, 2, 1); 
  const distance = 10; 
  const time = 20; 
  const totalPrice = calculator.calculatePrice(distance, time);
  console.log("The estimated Uber price is ", totalPrice, "Rs");