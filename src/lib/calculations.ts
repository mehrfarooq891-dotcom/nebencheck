import { benchmarks, City } from './benchmarks';

export interface CheckResult {
  overpayment: number;
  percentOver: number;
  riskScore: 'GREEN' | 'YELLOW' | 'RED';
  riskMessage: string;
  benchmarkCost: number;
  userCostPerSqm: number;
}

export function calculateNebenCheck(
  city: City,
  sqm: number,
  totalBill: number,
  months: number = 12
): CheckResult {
  const benchmark = benchmarks[city] || benchmarks.default;
  
  // Annual cost per sqm
  const userCostPerSqm = (totalBill / sqm / months) * 12;
  const benchmarkCostYearly = benchmark.totalPerSqm * sqm * 12;
  const benchmarkCostForPeriod = (benchmarkCostYearly / 12) * months;
  
  const overpayment = Math.max(0, totalBill - benchmarkCostForPeriod);
  const percentOver = ((totalBill - benchmarkCostForPeriod) / benchmarkCostForPeriod) * 100;
  
  let riskScore: 'GREEN' | 'YELLOW' | 'RED' = 'GREEN';
  let riskMessage = 'Deine Abrechnung liegt im normalen Bereich';
  
  if (percentOver > 30) {
    riskScore = 'RED';
    riskMessage = 'Achtung! Deine Abrechnung liegt deutlich über dem Durchschnitt';
  } else if (percentOver > 10) {
    riskScore = 'YELLOW';
    riskMessage = 'Deine Abrechnung ist leicht erhöht — prüfe Details';
  }
  
  return {
    overpayment,
    percentOver,
    riskScore,
    riskMessage,
    benchmarkCost: benchmarkCostForPeriod,
    userCostPerSqm
  };
}

export function calculateCO2Tax(
  heatingType: string,
  annualHeatingCost: number,
  energyClass: string
) {
  // Rough estimate logic for CO2 split based on energy class
  const classWeights: Record<string, number> = {
    'A+': 0.05,
    'A': 0.10,
    'B': 0.20,
    'C': 0.30,
    'D': 0.40,
    'E': 0.50,
    'F': 0.70,
    'G': 0.85,
    'H': 0.95,
    'unknown': 0.50
  };
  
  const landlordShare = classWeights[energyClass] || 0.50;
  // Assuming CO2 costs are ~10% of total heating costs on average for gas/oil
  const estimatedCO2Total = annualHeatingCost * 0.10; 
  const landlordAmount = estimatedCO2Total * landlordShare;
  
  return {
    landlordAmount,
    landlordSharePercent: landlordShare * 100,
    estimatedCO2Total
  };
}
