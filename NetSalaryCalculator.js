function calculateNetSalary(basicSalary, benefits) {
    const TAX_RATE = 0.15;
    const NHIF_RATE = 0.025;
    const NSSF_RATE = 0.06;

    const grossSalary = basicSalary + benefits;

    const tax = grossSalary * TAX_RATE;

    const nhifDeductions = grossSalary * NHIF_RATE;

    const nssfDeductions = grossSalary * NSSF_RATE;

    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

const basicSalary = 60000;
const benefits = 19000;

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Tax (PAYE):", salaryDetails.tax);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);
