export function validateInput(event) {
  const allowedKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Backspace',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Enter',
    '+',
    '-',
    '*',
    '/',
    ',',
    '(',
    ')',
  ];

  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
}

export function calculate(expression) {
  try {
    const tokens = tokenize(expression);
    const rpn = toRPN(tokens);
    return evaluateRPN(rpn);
  } catch (e) {
    return 'Error';
  }
}

function tokenize(expression) {
  const regex = /(\(-?\d+(\.\d+)?\))|(-?\d+(\.\d+)?)|[+\-*/()]/g;
  const tokens = expression.match(regex);
  if (!tokens) throw new Error('Invalid expression');
  return tokens.map((token) => {
    if (/^\(-?\d+(\.\d+)?\)$/.test(token)) {
      return token.slice(1, -1);
    }
    return token;
  });
}

function toRPN(tokens) {
  const output = [];
  const operators = [];
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

  for (const token of tokens) {
    if (!isNaN(token)) {
      output.push(token);
    } else if ('+-*/'.includes(token)) {
      while (
        operators.length &&
        precedence[operators.at(-1)] >= precedence[token]
      ) {
        output.push(operators.pop());
      }
      operators.push(token);
    } else if (token === '(') {
      operators.push(token);
    } else if (token === ')') {
      while (operators.length && operators.at(-1) !== '(') {
        output.push(operators.pop());
      }
      if (operators.at(-1) === '(') operators.pop();
    }
  }

  return output.concat(operators.reverse());
}

function evaluateRPN(rpn) {
  const stack = [];
  for (const token of rpn) {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
        default:
          throw new Error('Unknown operator');
      }
    }
  }

  return stack[0];
}
