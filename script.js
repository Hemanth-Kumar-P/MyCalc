// First calculator function: Calculates interest per ₹100 per month
function calculateInterestPerHundred() {
    const principal = document.getElementById("principal").value;
    const ratePerHundred = document.getElementById("ratePerHundred").value;
    const time = document.getElementById("time").value;

    if (principal && ratePerHundred && time) {
        const interest = (principal / 100) * ratePerHundred * time;
        document.getElementById("resultHundred").innerHTML = `Total Interest: ₹${interest.toFixed(2)}`;
    } else {
        document.getElementById("resultHundred").innerHTML = "Please enter all values.";
    }
}

// Second calculator function: Calculates interest per ₹10,000 and settled amount
function calculateInterestPerTenThousand() {
    const principalTenThousand = document.getElementById("principalTenThousand").value;
    const ratePerTenThousand = document.getElementById("ratePerTenThousand").value;

    if (principalTenThousand && ratePerTenThousand) {
        // Calculate interest based on the given rate per ₹10,000
        const interest = (principalTenThousand / 10000) * ratePerTenThousand;
        const settledAmount = principalTenThousand - interest;

        document.getElementById("resultTenThousand").innerHTML = 
            `Interest: ₹${interest.toFixed(2)}<br>Settled Amount: ₹${settledAmount.toFixed(2)}`;
    } else {
        document.getElementById("resultTenThousand").innerHTML = "Please enter all values.";
    }
}
