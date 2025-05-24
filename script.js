document.getElementById('car-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var budget = document.getElementById('budget').value;
    var type = document.getElementById('type').value;
    var fuel = document.getElementById('fuel').value;
    var transmission = document.getElementById('transmission').value;
    var brand = document.getElementById('brand').value.toLowerCase();

    var cars = [
        { name: "Toyota Corolla", budget: "low", type: "sedan", fuel: "gasoline", transmission: "automatic", brand: "toyota" },
        { name: "Hyundai Ioniq 5", budget: "low", type: "suv", fuel: "gasoline", transmission: "manual", brand: "hyundai" },
        { name: "Chevrolet Bolt", budget: "low", type: "electric", fuel: "electric", transmission: "automatic", brand: "chevrolet" },
        { name: "Honda Civic", budget: "mid", type: "sedan", fuel: "gasoline", transmission: "automatic", brand: "honda" },
        { name: "Tesla Model 3", budget: "mid", type: "electric", fuel: "electric", transmission: "automatic", brand: "tesla" },
        { name: "Ford F-150", budget: "high", type: "truck", fuel: "gasoline", transmission: "automatic", brand: "ford" },
        { name: "Toyota Prius", budget: "mid", type: "hatchback", fuel: "hybrid", transmission: "automatic", brand: "toyota" },
        { name: "BMW 3 Series", budget: "high", type: "sedan", fuel: "gasoline", transmission: "manual", brand: "bmw" },
        { name: "Mazda CX-5", budget: "mid", type: "suv", fuel: "gasoline", transmission: "automatic", brand: "mazda" },
        { name: "Nissan Leaf", budget: "mid", type: "hatchback", fuel: "electric", transmission: "automatic", brand: "nissan" },
        { name: "Toyota Yaris", budget: "mid", type: "hatchback", fuel: "electric", transmission: "automatic", brand: "toyota" },
        { name: "Kia Rio", budget: "low", type: "sedan", fuel: "gasoline", transmission: "manual", brand: "kia" },
        { name: "Subaru Outback", budget: "mid", type: "wagon", fuel: "gasoline", transmission: "automatic", brand: "subaru" },
        { name: "Audi A4", budget: "high", type: "sedan", fuel: "gasoline", transmission: "automatic", brand: "audi" },
        { name: "Jeep Wrangler", budget: "high", type: "suv", fuel: "gasoline", transmission: "manual", brand: "jeep" },
        { name: "Volkswagen Golf", budget: "mid", type: "hatchback", fuel: "gasoline", transmission: "manual", brand: "volkswagen" },
        { name: "Hyundai Elantra", budget: "low", type: "sedan", fuel: "gasoline", transmission: "automatic", brand: "hyundai" },
        { name: "Chevrolet Tahoe", budget: "high", type: "suv", fuel: "gasoline", transmission: "automatic", brand: "chevrolet" },
        { name: "Ford Mustang", budget: "high", type: "coupe", fuel: "gasoline", transmission: "manual", brand: "ford" },
        { name: "Tesla Model X", budget: "high", type: "suv", fuel: "electric", transmission: "automatic", brand: "tesla" },
        { name: "Honda Fit", budget: "low", type: "hatchback", fuel: "gasoline", transmission: "automatic", brand: "honda" },
        { name: "Nissan Rogue", budget: "mid", type: "suv", fuel: "gasoline", transmission: "automatic", brand: "nissan" },
        { name: "Toyota Tacoma", budget: "mid", type: "truck", fuel: "gasoline", transmission: "manual", brand: "toyota" },
        { name: "BMW i3", budget: "mid", type: "hatchback", fuel: "electric", transmission: "automatic", brand: "bmw" },
        { name: "Mercedes-Benz C-Class", budget: "high", type: "sedan", fuel: "gasoline", transmission: "automatic", brand: "mercedes-benz" },
        { name: "Volvo XC40", budget: "high", type: "suv", fuel: "electric", transmission: "automatic", brand: "volvo" },
        { name: "Mini Cooper", budget: "mid", type: "hatchback", fuel: "gasoline", transmission: "manual", brand: "mini" },
        { name: "Chrysler Pacifica", budget: "high", type: "van", fuel: "hybrid", transmission: "automatic", brand: "chrysler" },
        { name: "Lucid Air", budget: "high", type: "sedan", fuel: "electric", transmission: "automatic", brand: "lucid" },
        { name: "Rivian R1T", budget: "high", type: "truck", fuel: "electric", transmission: "automatic", brand: "rivian" },
        { name: "Mitsubishi Mirage", budget: "low", type: "hatchback", fuel: "gasoline", transmission: "manual", brand: "mitsubishi" },
        { name: "Ford Focus", budget: "low", type: "hatchback", fuel: "gasoline", transmission: "manual", brand: "ford" },
        { name: "Toyota GR Yaris", budget: "low", type: "hatchback", fuel: "gasoline", transmission: "manual", brand: "toyota" }
    ];

    
    var matches = cars.filter(car => 
        car.budget === budget &&
        car.type === type &&
        car.fuel === fuel &&
        car.transmission === transmission &&
        (brand === "any" || car.brand.includes(brand))
    );

    var result = document.getElementById('result');
    if (matches.length > 0) {
        result.innerHTML = matches.map(car => `<p><strong>${car.name}</strong></p>`).join("");
    } else {
        result.innerHTML = "<p>No matching cars found. Try adjusting your preferences.</p>";
    }

    document.getElementById('recommendation').style.display = 'block';
});