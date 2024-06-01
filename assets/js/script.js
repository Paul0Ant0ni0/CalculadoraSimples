document.querySelectorAll("button")
            .forEach((element, index) => {
                element.addEventListener("click", () => {
                    execute(index);
                });
            });

        const execute = (index) => {
            const value1 = parseFloat(document.getElementById('value1').value);
            const value2 = parseFloat(document.getElementById('value2').value);
            const result = document.getElementById('result');

            if (!isNaN(value1) && !isNaN(value2)) {
                switch (index) {
                    case 0:
                        reset()
                        break;
                    case 1:
                        result.textContent = add(value1, value2);
                        break;
                    case 2:
                        result.textContent = subtract(value1, value2);
                        break;
                    case 3:
                        result.textContent = multiply(value1, value2);
                        break;
                    case 4:
                        result.textContent = divide(value1, value2);
                        break;
                }
            } else {
                alert("Preencha os todos campos!!!")


            }

        }

        const reset = () => {
            document.getElementById('value1').value = "";
            document.getElementById('value2').value = "";
        }


        function add(value1, value2) {
            return value1 + value2;
        }
        function subtract(value1, value2) {
            return value1 - value2;
        }
        function multiply(value1, value2) {
            return value1 * value2;
        }
        function divide(value1, value2) {
            const error = `${value1} não pode ser dividido por ${value2}`;
            if (value1 !== 0 && value2 !== 0) {
                return value1 / value2;
            } else {
                alert(error);
                return "⚠️ ERROR ⚠️";
            }
        }