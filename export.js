document.getElementById('exportBtn').addEventListener('click', function() {
    let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    if (vehicles.length === 0) {
        alert('No data available to export.');
        return;
    }

    let ws_data = [['Customer Name', 'Mobile No', 'City/Village', 'Agreement No', 'Loan Due', 'Vehicle No', 'Seize Date', 'Vehicle Model', 'Colour', 'Year of Manufacture', 'Vehicle Value', 'Sale Value', 'Garage', 'Remarks']];

    vehicles.forEach(vehicle => {
        ws_data.push([
            vehicle.customerName,
            vehicle.mobileNo,
            vehicle.cityVillage,
            vehicle.agreementNumber,
            vehicle.loanDue,
            vehicle.vehicleNumber,
            vehicle.seizeDate,
            vehicle.vehicleModel,
            vehicle.colour,
            vehicle.yearManufactured,
            vehicle.vehicleValue,
            vehicle.saleValue,
            vehicle.garage,
            vehicle.remarks
        ]);
    });

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, 'Vehicles');

    XLSX.writeFile(wb, 'Seized_Vehicles.xlsx');
});
