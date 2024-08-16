document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const vehicleNumber = document.getElementById('vehicleNumber').value;
    const ownerName = document.getElementById('ownerName').value;
    const seizeDate = document.getElementById('seizeDate').value;
    const yearManufactured = document.getElementById('yearManufactured').value;
    const vehicleValue = document.getElementById('vehicleValue').value;
    const agreementNumber = document.getElementById('agreementNumber').value;
    const loanDue = document.getElementById('loanDue').value;
    const remarks = document.getElementById('remarks').value;

    // Create vehicle object
    const vehicle = {
        vehicleNumber,
        ownerName,
        seizeDate,
        yearManufactured,
        vehicleValue,
        agreementNumber,
        loanDue,
        remarks
    };

    // Save to local storage
    let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    vehicles.push(vehicle);
    localStorage.setItem('vehicles', JSON.stringify(vehicles));

    // Clear form
    document.getElementById('vehicleForm').reset();
    alert('Vehicle added successfully!');
});

function searchVehicle() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    const results = vehicles.filter(vehicle => 
        vehicle.vehicleNumber.toLowerCase().includes(query) || 
        vehicle.ownerName.toLowerCase().includes(query)
    );

    displayResults(results);
}

function displayResults(results) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (results.length > 0) {
        results.forEach(vehicle => {
            resultDiv.innerHTML += `
                <p><strong>Vehicle Number:</strong> ${vehicle.vehicleNumber}</p>
                <p><strong>Owner Name:</strong> ${vehicle.ownerName}</p>
                <p><strong>Seize Date:</strong> ${vehicle.seizeDate}</p>
                <p><strong>Year of Manufacture:</strong> ${vehicle.yearManufactured}</p>
                <p><strong>Vehicle Value (₹):</strong> ${vehicle.vehicleValue}</p>
                <p><strong>Agreement Number:</strong> ${vehicle.agreementNumber}</p>
                <p><strong>Loan Due (₹):</strong> ${vehicle.loanDue}</p>
                <p><strong>Remarks:</strong> ${vehicle.remarks}</p>
                <hr>
            `;
        });
    } else {
        resultDiv.innerHTML = '<p>No results found</p>';
    }
}
