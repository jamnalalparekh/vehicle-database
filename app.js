<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seized Vehicle Database</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Seized Vehicle Database</h1>
    </header>
    
    <main>
        <form id="vehicleForm">
            <div class="form-container">
                <div class="form-column">
                    <h2>Customer Details</h2>
                    <label for="customerName">Customer Name:</label>
                    <input type="text" id="customerName" required>
                    
                    <label for="mobileNo">Mobile No:</label>
                    <input type="text" id="mobileNo" required>
                    
                    <label for="cityVillage">City/Village:</label>
                    <input type="text" id="cityVillage" required>
                    
                    <label for="agreementNumber">Agreement No:</label>
                    <input type="text" id="agreementNumber" required>
                    
                    <label for="loanDue">Loan Due (₹):</label>
                    <input type="number" id="loanDue" required>
                </div>

                <div class="form-column">
                    <h2>Vehicle Details</h2>
                    <label for="vehicleNumber">Vehicle No:</label>
                    <input type="text" id="vehicleNumber" required>
                    
                    <label for="seizeDate">Seize Date (DDMMYYYY):</label>
                    <input type="text" id="seizeDate" required pattern="\d{2}\d{2}\d{4}" placeholder="DDMMYYYY">
                    
                    <label for="vehicleModel">Vehicle Model:</label>
                    <input type="text" id="vehicleModel" required>
                    
                    <label for="colour">Colour:</label>
                    <input type="text" id="colour" required>
                    
                    <label for="yearManufactured">Year of Manufacture:</label>
                    <input type="number" id="yearManufactured" required>
                    
                    <label for="vehicleValue">Vehicle Value (₹):</label>
                    <input type="number" id="vehicleValue" required>
                    
                    <label for="saleValue">Sale Value (₹):</label>
                    <input type="number" id="saleValue" required>
                    
                    <label for="garage">Garage:</label>
                    <input type="text" id="garage" required>
                    
                    <label for="remarks">Remarks:</label>
                    <textarea id="remarks" rows="4"></textarea>
                </div>
            </div>
            
            <button type="submit">Save</button>
        </form>
        
        <section class="search-section">
            <h2>Search Vehicle</h2>
            <input type="text" id="searchQuery" placeholder="Enter vehicle number or customer name">
            <button onclick="searchVehicle()">Search</button>
        </section>
        
        <div class="result" id="result"></div>
    </main>
    
    <footer>
        <p>&copy; 2024 Seized Vehicle Database</p>
    </footer>

    <script src="app.js"></script>
</body>
</html>
