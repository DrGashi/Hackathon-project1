var carDatabase = [ 
    { name: "2024 Toyota Corolla", budget: "low", type: "sedan", fuel: "gas", brand: "toyota"},
    { name: "2025 Tesla Model 3", budget: "high", type: "sedan", fuel: "electric", brand: "tesla"},
    { name: "2020 Ford F-150", budget: "mid", type: "truck", fuel: "gas", brand: "ford"},
    { name: "2015 BMW X5", budget: "high", type: "suv", fuel: "gas", brand: "bmw"},
    { name: "2023 Toyota RAV4 Hybrid", budget: "mid", type: "suv", fuel: "hybrid", brand: "toyota"},
    { name: "2024 Tesla Model Y", budget: "high", type: "suv", fuel: "electric", brand: "tesla"},
    { name: "2019 Ford Escape", budget: "mid", type: "suv", fuel: "gas", brand: "ford"},
    { name: "2013 Volkswagen Touareg", budget: "low", type: "suv", fuel: "diesel", brand: "volkswagen"},
    { name: "1995 Audi RS2", budget: "high", type: "sedan", fuel: "diesel", brand: "audi"},
    { name: "2019 Volkswagen Touareg", budget: "mid", type: "suv", fuel: "gas", brand: "volkswagen"},
    { name: "2022 Honda Civic", budget: "low", type: "sedan", fuel: "gas", brand: "honda"},
    { name: "2021 Hyundai Elantra Hybrid", budget: "mid", type: "sedan", fuel: "hybrid", brand: "hyundai"},
    { name: "2023 Chevrolet Silverado 1500", budget: "high", type: "truck", fuel: "gas", brand: "chevrolet"},
    { name: "2023 Kia Sportage Hybrid", budget: "mid", type: "suv", fuel: "hybrid", brand: "kia"},
    { name: "2018 Jeep Grand Cherokee", budget: "mid", type: "suv", fuel: "gas", brand: "jeep"},
    { name: "2017 Subaru Outback", budget: "low", type: "wagon", fuel: "gas", brand: "subaru"},
    { name: "2023 Rivian R1T", budget: "high", type: "truck", fuel: "electric", brand: "rivian"},
    { name: "2016 Toyota Prius", budget: "low", type: "hatchback", fuel: "hybrid", brand: "toyota"},
    { name: "2025 Ford Mustang Mach-E", budget: "high", type: "suv", fuel: "electric", brand: "ford"},
    { name: "2019 Mazda CX-5", budget: "mid", type: "suv", fuel: "gas", brand: "mazda"},
    { name: "2021 Honda Ridgeline", budget: "mid", type: "truck", fuel: "gas", brand: "honda"},
    { name: "2022 Lucid Air", budget: "high", type: "sedan", fuel: "electric", brand: "lucid"},
    { name: "2023 Hyundai Ioniq 5", budget: "high", type: "hatchback", fuel: "electric", brand: "hyundai"},
    { name: "2020 Mercedes-Benz GLC", budget: "high", type: "suv", fuel: "gas", brand: "mercedes"},
    { name: "2015 Kia Soul", budget: "low", type: "hatchback", fuel: "gas", brand: "kia"},
    { name: "2022 Audi Q5 Plug-In Hybrid", budget: "high", type: "suv", fuel: "hybrid", brand: "audi"},
    { name: "2022 Lexus ES 300h", budget: "high", type: "sedan", fuel: "hybrid", brand: "lexus"},
    { name: "2016 Volvo V60 Cross Country", budget: "mid", type: "wagon", fuel: "gas", brand: "volvo"},
    { name: "2019 Mitsubishi Outlander Sport", budget: "low", type: "suv", fuel: "gas", brand: "mitsubishi"},
    { name: "2023 Fiat 500e", budget: "low", type: "hatchback", fuel: "electric", brand: "fiat"},
    { name: "2023 Porsche Taycan Turbo S", budget: "very high", type: "sedan", fuel: "electric", brand: "porsche"},
    { name: "2024 Tesla Model S Plaid", budget: "very high", type: "sedan", fuel: "electric", brand: "tesla"},
    { name: "2024 Lucid Air Sapphire", budget: "very high", type: "sedan", fuel: "electric", brand: "lucid"},
    { name: "2023 Audi RS e-tron GT", budget: "very high", type: "sedan", fuel: "electric", brand: "audi"},
    { name: "2024 Maserati MC20", budget: "very high", type: "sedan", fuel: "gas", brand: "maserati"},
    { name: "2023 Bentley Bentayga V8", budget: "very high", type: "suv", fuel: "gas", brand: "bentley"},
    { name: "2023 Aston Martin DBX707", budget: "very high", type: "suv", fuel: "gas", brand: "aston martin"},
    { name: "2023 Ferrari SF90 Stradale", budget: "very high", type: "coupe", fuel: "hybrid", brand: "ferrari"},
    { name: "2022 Lamborghini Huracán STO", budget: "very high", type: "coupe", fuel: "gas", brand: "lamborghini"},
    { name: "2023 McLaren Artura", budget: "very high", type: "coupe", fuel: "hybrid", brand: "mclaren"},
    { name: "2023 Bugatti Chiron Super Sport", budget: "very high", type: "coupe", fuel: "gas", brand: "bugatti"},
    { name: "2023 Koenigsegg Jesko Absolut", budget: "very high", type: "coupe", fuel: "gas", brand: "koenigsegg"},
    { name: "2007 Pagani Zonda R", budget: "very high", type: "coupe", fuel: "gas", brand: "pagani"},
    { name: "2024 Nissan Leaf", budget: "low", type: "hatchback", fuel: "electric", brand: "nissan"},
    { name: "2020 Chevrolet Bolt EV", budget: "low", type: "hatchback", fuel: "electric", brand: "chevrolet"},
    { name: "2023 Toyota Tacoma", budget: "mid", type: "truck", fuel: "gas", brand: "toyota"},
    { name: "2021 RAM 1500", budget: "mid", type: "truck", fuel: "gas", brand: "ram"},
    { name: "2022 Subaru Forester", budget: "mid", type: "suv", fuel: "gas", brand: "subaru"},
    { name: "2024 Honda CR-V Hybrid", budget: "mid", type: "suv", fuel: "hybrid", brand: "honda"},
    { name: "2023 BMW i4", budget: "high", type: "sedan", fuel: "electric", brand: "bmw"},
    { name: "2024 Mercedes-Benz EQB", budget: "high", type: "suv", fuel: "electric", brand: "mercedes"},
    { name: "2021 Kia K5", budget: "low", type: "sedan", fuel: "gas", brand: "kia"},
    { name: "2022 Hyundai Tucson Hybrid", budget: "mid", type: "suv", fuel: "hybrid", brand: "hyundai"},
    { name: "2018 Ford Fusion Hybrid", budget: "low", type: "sedan", fuel: "hybrid", brand: "ford"},
    { name: "2024 Genesis GV70", budget: "high", type: "suv", fuel: "gas", brand: "genesis"},
    { name: "2022 Jeep Wrangler 4xe", budget: "high", type: "suv", fuel: "hybrid", brand: "jeep"},
    { name: "2023 Mini Cooper SE", budget: "mid", type: "hatchback", fuel: "electric", brand: "mini"},
    { name: "2023 Polestar 2", budget: "high", type: "sedan", fuel: "electric", brand: "polestar"},
    { name: "2020 Lincoln Corsair", budget: "mid", type: "suv", fuel: "gas", brand: "lincoln"},
    { name: "2024 GMC Hummer EV", budget: "very high", type: "truck", fuel: "electric", brand: "gmc"},
    { name: "2021 Cadillac Escalade", budget: "high", type: "suv", fuel: "electric", brand: "cadillac"},
    { name: "2024 Alfa Romeo Tonale", budget: "high", type: "suv", fuel: "hybrid", brand: "alfa romeo"},
    { name: "2023 Peugeot e-208", budget: "low", type: "hatchback", fuel: "electric", brand: "peugeot"},
    { name: "2025 Lamborghini Revuelto", budget: "very high", type: "coupe", fuel: "hybrid", brand: "lamborghini"},
    { name: "2024 Toyota Camry", budget: "mid", type: "sedan", fuel: "gas", brand: "toyota"},
    { name: "2023 Ford Bronco", budget: "mid", type: "suv", fuel: "gas", brand: "ford"},
    { name: "2024 BMW X3", budget: "high", type: "suv", fuel: "gas", brand: "bmw"},
    { name: "2025 Tesla Cybertruck", budget: "very high", type: "truck", fuel: "electric", brand: "tesla"},
    { name: "2024 Honda Accord Hybrid", budget: "mid", type: "sedan", fuel: "hybrid", brand: "honda"},
    { name: "2023 Chevrolet Tahoe", budget: "high", type: "suv", fuel: "gas", brand: "chevrolet"},
    { name: "2024 Kia EV6", budget: "high", type: "hatchback", fuel: "electric", brand: "kia"},
    { name: "2024 Jeep Gladiator", budget: "mid", type: "truck", fuel: "gas", brand: "jeep"},
    { name: "2023 Subaru Crosstrek Hybrid", budget: "mid", type: "suv", fuel: "hybrid", brand: "subaru"},
    { name: "2024 Mercedes-Benz S-Class", budget: "very high", type: "sedan", fuel: "gas", brand: "mercedes"},
    { name: "2024 Audi A6", budget: "high", type: "sedan", fuel: "gas", brand: "audi"},
    { name: "2023 Lexus RX 500h", budget: "high", type: "suv", fuel: "hybrid", brand: "lexus"},
    { name: "2024 Volvo XC90 Recharge", budget: "high", type: "suv", fuel: "hybrid", brand: "volvo"},
    { name: "2024 Mitsubishi Outlander PHEV", budget: "mid", type: "suv", fuel: "hybrid", brand: "mitsubishi"},
    { name: "2024 Nissan Altima", budget: "low", type: "sedan", fuel: "gas", brand: "nissan"},
    { name: "2023 RAM 2500", budget: "high", type: "truck", fuel: "gas", brand: "ram"},
    { name: "2024 Hyundai Santa Fe", budget: "mid", type: "suv", fuel: "gas", brand: "hyundai"},
    { name: "2023 Lincoln Navigator Black Label", budget: "very high", type: "suv", fuel: "gas", brand: "lincoln"},
    { name: "2025 Cadillac CT5-V Blackwing", budget: "very high", type: "sedan", fuel: "gas", brand: "cadillac"},
    { name: "2024 Genesis G90", budget: "high", type: "sedan", fuel: "gas", brand: "genesis"},
    { name: "2024 Peugeot 3008 Hybrid", budget: "mid", type: "suv", fuel: "hybrid", brand: "peugeot"},
    { name: "2023 Rivian R1S", budget:"high", type:"suv", fuel:"electric", brand:"rivian"}
];


function filterByBrand(brand) {
    var filteredCars = carDatabase.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
    displayResults(filteredCars, brand);
}

function displayResults(cars, brand) {
    var resultsContainer = document.getElementById("car-results");
    resultsContainer.innerHTML = "";

    var heading = document.createElement("h2");
    heading.textContent = `Cars from ${brand}`;
    heading.style.textTransform = "Capitalize";
    resultsContainer.appendChild(heading);

    var list = document.createElement("ul");

    cars.forEach(car => {
        var listItem = document.createElement("li");
        listItem.textContent = car.name;
        list.appendChild(listItem);
    });

    resultsContainer.appendChild(list);
}

document.addEventListener("DOMContentLoaded", () => {
    var brandButtons = document.querySelectorAll('.logo-button');
    
    brandButtons.forEach(button => {
        button.addEventListener('click', () => {
            var brand = button.value;
            filterByBrand(brand);
        });
    });
});