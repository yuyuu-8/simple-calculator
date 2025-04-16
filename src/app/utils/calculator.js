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
