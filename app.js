let editIndex = -1;  // Variable to store the index of the current edit

document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values (Customer Details)
    const customerName = document.getElementById('customerName').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const cityVillage = document.getElementById('cityVillage').value;
    const agreementNumber = document.getElementById('agreementNumber').value;
    const loanDue = document.getElementById('loanDue').value;

    // Get form values (Vehicle Details)
    const vehicleNumber = document.getElementById('vehicleNumber').value;
    const seizeDate = document.getElementById('seizeDate').value;
    const vehicleModel = document.getElementById('vehicleModel').value;
    const colour = document.getElementById('colour').value;
    const yearManufactured = document.getElementById('yearManufactured').value;
    const vehicleValue = document.getElementById('vehicleValue').value;
    const saleValue = document.getElementById('saleValue').value;
    const garage = document.getElementById('garage').value;
    const remarks = document.getElementById('remarks').value;

    // Create vehicle object
    const vehicle = {
        customerName,
        mobileNo,
        cityVillage,
        agreementNumber,
        loanDue,
        vehicleNumber,
        seizeDate,
        vehicleModel,
        colour,
        yearManufactured,
        vehicleValue,
        saleValue,
        garage,
        remarks
    };

    let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];

    if (editIndex === -1) {
        // If not editing, add a new vehicle
        vehicles.push(vehicle);
    } else {
        // If editing, update the existing vehicle
        vehicles[editIndex] = vehicle;
        editIndex = -1;
    }

    localStorage.setItem('vehicles', JSON.stringify(vehicles));
    document.getElementById('vehicleForm').reset();
    alert('Vehicle data saved successfully!');
    displayResults(vehicles);  // Display updated list
});

function searchVehicle() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    const results = vehicles.filter((vehicle, index) => 
        vehicle.vehicleNumber.toLowerCase().includes(query) || 
        vehicle.customerName.toLowerCase().includes(query)
    );

    displayResults(results);
}

function displayResults(results) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (results.length > 0) {
        results.forEach((vehicle, index) => {
            resultDiv.innerHTML += `
                <div>
                    <p><strong>Customer Name:</strong> ${vehicle.customerName}</p>
                    <p><strong>Mobile No:</strong> ${vehicle.mobileNo}</p>
                    <p><strong>City/Village:</strong> ${vehicle.cityVillage}</p>
                    <p><strong>Agreement No:</strong> ${vehicle.agreementNumber}</p>
                    <p><strong>Loan Due (₹):</strong> ${vehicle.loanDue}</p>
                    <p><strong>Vehicle No:</strong> ${vehicle.vehicleNumber}</p>
                    <p><strong>Seize Date:</strong> ${vehicle.seizeDate}</p>
                    <p><strong>Vehicle Model:</strong> ${vehicle.vehicleModel}</p>
                    <p><strong>Colour:</strong> ${vehicle.colour}</p>
                    <p><strong>Year of Manufacture:</strong> ${vehicle.yearManufactured}</p>
                    <p><strong>Vehicle Value (₹):</strong> ${vehicle.vehicleValue}</p>
                    <p><strong>Sale Value (₹):</strong> ${vehicle.saleValue}</p>
                    <p><strong>Garage:</strong> ${vehicle.garage}</p>
                    <p><strong>Remarks:</strong> ${vehicle.remarks}</p>
                    <button onclick="editVehicle(${index})">Edit</button>
                    <hr>
                </div>
            `;
        });
    } else {
        resultDiv.innerHTML = '<p>No results found</p>';
    }
}

function editVehicle(index) {
    const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    const vehicle = vehicles[index];

    // Populate the form with the selected vehicle's data
    document.getElementById('customerName').value = vehicle.customerName;
    document.getElementById('mobileNo').value = vehicle.mobileNo;
    document.getElementById('cityVillage').value = vehicle.cityVillage;
    document.getElementById('agreementNumber').value = vehicle.agreementNumber;
    document.getElementById('loanDue').value = vehicle.loanDue;

    document.getElementById('vehicleNumber').value = vehicle.vehicleNumber;
    document.getElementById('seizeDate').value = vehicle.seizeDate;
    document.getElementById('vehicleModel').value = vehicle.vehicleModel;
    document.getElementById('colour').value = vehicle.colour;
    document.getElementById('yearManufactured').value = vehicle.yearManufactured;
    document.getElementById('vehicleValue').value = vehicle.vehicleValue;
    document.getElementById('saleValue').value = vehicle.saleValue;
    document.getElementById('garage').value = vehicle.garage;
    document.getElementById('remarks').value = vehicle.remarks;

    editIndex = index;  // Store the index of the current edit
}
