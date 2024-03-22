// This function calculates the net salary of an employee based on their basic salary and benefits.
function calculateNetSalary(basicSalary, benefits) {
    // This defines constant rates for tax, NHIF, and NSSF deductions.
    const TAX_RATE = 0.15; // 15% tax rate
    const NHIF_RATE = 0.025; // 2.5% NHIF rate
    const NSSF_RATE = 0.06; // 6% NSSF rate

    // This calculates the gross salary by adding the basic salary and benefits.
    const grossSalary = basicSalary + benefits;

    // This calculates tax, NHIF deductions, and NSSF deductions based on the gross salary.
    const tax = grossSalary * TAX_RATE;

    const nhifDeductions = grossSalary * NHIF_RATE;

    const nssfDeductions = grossSalary * NSSF_RATE;

    // This calculates the net salary by subtracting tax, NHIF deductions, and NSSF deductions from the gross salary.
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // This returns an object containing the detailed salary information.
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

// This defines the basic salary and the benefits.
const basicSalary = 60000; // An example of basic salary.
const benefits = 19000; // An example of benefits.

// This calculates the net salary using the defined function and the provided inputs.
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// This logs the various salary details including the gross salary, tax, NHIF deductions, NSSF deductions, and the net salary.
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Tax (PAYE):", salaryDetails.tax);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);
