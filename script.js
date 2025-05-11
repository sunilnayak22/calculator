        const buttons = document.querySelectorAll('input[type="button"]');
        const display = document.querySelector('input[type="text"]');

        let expression = '';

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.value;

                if (value === 'C') {
                    expression = '';
                    display.value = '0';
                } else if (value === '←') {
                    expression = expression.slice(0, -1);
                    display.value = expression || '0';
                } else if (value === '=') {
                    try {
                        expression = eval(expression).toString();
                        display.value = expression;
                    } catch {
                        display.value = 'Error';
                        expression = '';
                    }
                } else {
                    // Avoid duplicate operators
                    const lastChar = expression[expression.length - 1];
                    const operators = ['+', '-', '*', '/', '%'];

                    if (
                        operators.includes(lastChar) &&
                        operators.includes(value)
                    ) {
                        expression = expression.slice(0, -1) + value;
                    } else {
                        expression += value;
                    }

                    display.value = expression;
                }
            });
        });
