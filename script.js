
document.addEventListener('DOMContentLoaded', function() {
    const equationSelect = document.getElementById('equation-select');
    const input1E1 = document.getElementById('input1_equation1');
    const input2E1 = document.getElementById('input2_equation1');
    const input1E2 = document.getElementById('input1_equation2');
    const input2E2 = document.getElementById('input2_equation2');
    const input1E3 = document.getElementById('input1_equation3');
    const input2E3 = document.getElementById('input2_equation3');
    const input1E4 = document.getElementById('input1_equation4');
    const input2E4 = document.getElementById('input2_equation4');
    const input1E5 = document.getElementById('input1_equation5');
    const input2E5 = document.getElementById('input2_equation5');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultValue = document.getElementById('resultValue');

    // Physics equations and corresponding simulation logic
    const equations = {
        equation1: () => {
            // Logic for calculating Force (in Newtons)
            let mass = parseFloat(input1E1.value);
            let acceleration = parseFloat(input2E1.value);

            if (!isNaN(mass) && !isNaN(acceleration)) {
                let force = mass * acceleration;
                resultValue.textContent = "Result: " + force.toFixed(2) + " N";
            } else {
                resultValue.textContent = "Invalid input";
            }
        },
        equation2: () => {
            // Logic for calculating Velocity/Speed (in meters per second)
            let distance = parseFloat(input1E2.value);
            let time = parseFloat(input2E2.value);

            if (isNaN(distance) || isNaN(time)) {
                resultValue.textContent = "Invalid input";
            } else {
                let speed = distance / time;
                resultValue.textContent = "Result: " + speed.toFixed(2) + " m/s";
            }
        },
        equation3: () => {
            // Logic for calculating acceleration (in meters per second squared)
            let velocity = parseFloat(input1E3.value);
            let time = parseFloat(input2E3.value);

            if (isNaN(velocity) || isNaN(time)) {
                resultValue.textContent = "Invalid input";
            } else {
                let acceleration = velocity / time;
                resultValue.textContent = "Result: " + acceleration.toFixed(2) + " m/s²";
            }
        },
        equation4: () => {
            // Logic for change in velocity (in meters per second)
            let acceleration = parseFloat(input1E4.value);
            let time = parseFloat(input2E4.value);

            if (isNaN(acceleration) || isNaN(time)) {
                resultValue.textContent = "Invalid input";
            } else {
                let changeInVelocity = acceleration * time;
                resultValue.textContent = "Result: " + changeInVelocity.toFixed(2) + "m/s"
            }
        },
        equation5: () => {
            // Logic for calculating change in time (in seconds)
            let velocity = parseFloat(input1E5.value);
            let acceleration = parseFloat(input2E5.value);

            if (isNaN(velocity) || isNaN(acceleration)) {
                resultValue.textContent = "Invalid input";
            } else {
                let changeInTime = velocity / acceleration;
                resultValue.textContent = "Result: " + changeInTime.toFixed(2) + "s" 
            }
        }
        // Add more equations and simulation logic here as needed
    };

    // CSS to initially hide the input fields
    const equationInputs = document.querySelectorAll('.equation-inputs');
    for (const inputs of equationInputs) {
        inputs.style.display = 'none';
    }
    calculateBtn.style.display = 'none'; // Initially hide the Calculate button

    // Event listener to trigger the simulation when the equation is selected
    equationSelect.addEventListener('change', () => {
        const selectedEquation = equationSelect.value;

        // Clear the result when switching equations
        resultValue.textContent = '';

        // Hide all input fields and the Calculate button
        for (const inputs of equationInputs) {
            inputs.style.display = 'none';
        }
        calculateBtn.style.display = 'none'; // Hide the Calculate button

        // Show the relevant input fields based on the selected equation
        if (selectedEquation !== 'Selections') {
            document.getElementById(selectedEquation + '-inputs').style.display = 'block';
            calculateBtn.style.display = 'block'; // Show the Calculate button
        }
    });

    // Event listener for the Calculate button to trigger the simulation
    calculateBtn.addEventListener('click', () => {
        const selectedEquation = equationSelect.value;
        equations[selectedEquation]();
    });

    // Event listener for input fields to trigger calculation on "Enter" key press
    input1E1.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });

    input2E1.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });

    input1E2.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });

    input2E2.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });

    input1E3.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });

    input2E3.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });

    input1E4.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });

    input2E4.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });
    input1E5.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });

    input2E5.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            equations[equationSelect.value]();
        }
    });
    // Initialize the simulation with the default equation (optional)
    equations[equationSelect.value]();
});
