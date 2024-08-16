/* Reset some default styles */
body, h1, h2, p, button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Basic styling for body */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

/* Centering and styling the container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Styling headers */
h1 {
    text-align: center;
    color: #007bff;
    margin-bottom: 20px;
    font-size: 2.5em;
}

/* Form styling */
form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
}

/* Form groups */
.form-group {
    flex: 1;
    min-width: 300px;
}

/* Form labels and inputs */
form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
}

form input, form select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 16px;
}

/* Button styling */
button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

/* Table styling */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table th, table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
}

table th {
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
}

/* Table data */
table td {
    font-size: 14px;
}

/* Actions column */
table .actions {
    text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
    form {
        flex-direction: column;
    }

    form input, form select {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 10px;
    }

    button {
        padding: 10px;
        font-size: 14px;
    }
}
