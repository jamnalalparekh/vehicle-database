document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const vehicle = {
        customerName: document.getElementById('customerName').value,
        mobileNo: document.getElementById('mobileNo').value,
        cityVillage: document.getElementById('cityVillage').value,
        agreementNumber: document.getElementById('agreementNumber').value,
        loanDue: document.getElementById('loanDue').value,
        vehicleNumber: document.getElementById('vehicleNumber').value,
        seizeDate: document.getElementById('seizeDate').value,
        vehicleModel: document.getElementById('vehicleModel').value,
        colour: document.getElementById('colour').value,
        yearManufactured: document.getElementById('yearManufactured').value,
        vehicleValue: document.getElementById('vehicleValue').value,
        saleValue: document.getElementById('saleValue').value,
        garage: document.getElementById('garage').value,
        remarks: document.getElementById('remarks').value
    };

    let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    
    if (typeof editIndex === 'number') {
        vehicles[editIndex] = vehicle;  // Update existing entry
        editIndex = undefined;  // Clear editIndex after saving
    } else {
        vehicles.push(vehicle);  // Add new entry
    }
    
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
    alert('Vehicle data saved successfully!');
    document.getElementById('vehicleForm').reset();  // Reset the form
    displayResults(vehicles);  // Display updated list
});

let editIndex;

function searchVehicle() {
    let query = document.getElementById('searchQuery').value.toLowerCase();
    let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    
    let results = vehicles.filter(vehicle =>
        vehicle.vehicleNumber.toLowerCase().includes(query) ||
        vehicle.customerName.toLowerCase().includes(query)
    );
    
    displayResults(results);
}

function displayResults(vehicles) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';  // Clear previous results
    
    if (vehicles.length === 0) {
        resultDiv.innerHTML = '<p>No results found.</p>';
        return;
    }
    
    vehicles.forEach((vehicle, index) => {
        let vehicleDiv = document.createElement('div');
        vehicleDiv.className = 'result-item';
        vehicleDiv.innerHTML = `
            <p><strong>Customer Name:</strong> ${vehicle.customerName}</p>
            <p><strong>Vehicle No:</strong> ${vehicle.vehicleNumber}</p>
            <p><strong>Seize Date:</strong> ${vehicle.seizeDate}</p>
            <button onclick="editVehicle(${index})">Edit</button>
            <button onclick="deleteVehicle(${index})">Delete</button>
        `;
        resultDiv.appendChild(vehicleDiv);
    });
}

function editVehicle(index) {
    let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    let vehicle = vehicles[index];
    
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

function deleteVehicle(index) {
    let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    vehicles.splice(index, 1);  // Remove the vehicle at the specified index
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
    alert('Vehicle data deleted successfully!');
    displayResults(vehicles);  // Display updated list
}
