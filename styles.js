/* Header styling with gradient and shadow */
header {
    background: linear-gradient(90deg, #007bff, #0056b3);
    color: white;
    padding: 15px;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Button styling with rounded corners and hover animation */
header button,
.form-container button,
.search-section button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.2s ease;
}

header button:hover,
.form-container button:hover,
.search-section button:hover {
    transform: scale(1.05);
    background-color: #218838;
}

/* Input and form container styling */
input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

/* Main content styling */
main {
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

/* Footer styling */
footer {
    background-color: #0056b3;
    color: white;
    text-align: center;
    padding: 10px;
    position: absolute;
    width: 100%;
    bottom: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .form-container {
        grid-template-columns: 1fr;
    }

    header button {
        width: 100%;
        margin-top: 10px;
    }
}

/* Search result item styling */
.result-item {
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}
