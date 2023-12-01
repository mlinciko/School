export function gcd(a, b) {
  while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

export function findGCDs(numbers) {
  const gcds = [];
  
  for (const pair of numbers) {
      if (pair.length === 2) {
          const [a, b] = pair;
          const result = gcd(a, b);
          gcds.push(result);
      } else {
          gcds.push(0); // Если пара чисел не содержит два числа, то записываем 0
      }
  }
  
  return gcds;
}

export function parseStringToArray(inputString) {
  try {
      // Используем регулярное выражение для извлечения всех пар чисел из строки
      const regex = /\[(\d+), (\d+)\]/g;
      const matches = inputString.match(regex);

      // Инициализируем пустой результат, который будет многомерным массивом
      const result = [];

      // Итерируем по всем найденным парам чисел и добавляем их в результат
      for (const match of matches) {
          const [num1, num2] = match.match(/\d+/g).map(Number);
          result.push([num1, num2]);
      }

      return result;
  } catch (error) {
      console.error("Ошибка при парсинге строки:", error);
      return null;
  }
}

export function calculateFirstCathetus(hypotenuse, secondCathetus) {
  if (hypotenuse <= 0 || secondCathetus <= 0) {
      return "Гипотенуза и второй катет должны быть положительными числами.";
  }

  const firstCathetus = Math.sqrt(hypotenuse ** 2 - secondCathetus ** 2);

  return firstCathetus;
}

export function extractNumbersAfterColon(inputString) {
  // Ищем индекс двоеточия
  const colonIndex = inputString.indexOf(':');

  // Проверяем, что двоеточие было найдено и не находится в начале или конце строки
  if (colonIndex === -1 || colonIndex === 0 || colonIndex === inputString.length - 1) {
      return "Строка не содержит два числа после двоеточия.";
  }

  // Извлекаем подстроку после двоеточия
  const numbersString = inputString.substring(colonIndex + 1).trim();

  // Разделяем подстроку на числа, используя запятую как разделитель
  const numbersArray = numbersString.split(',').map(Number);

  // Проверяем, что получилось ровно два числа
  if (numbersArray.length !== 2) {
      return "Строка не содержит два числа после двоеточия.";
  }

  return numbersArray;
}

export function G(A, B) {
  return (2 * A + B * B) / (A * B * 2 + B * 5);
}

export function Y(T, S) {
  const term1 = G(12, S);
  const term2 = G(T, S);
  const term3 = G(2 * S - 1, S * T);

  return term1 + term2 - term3;
}

export function isPrime(num) {
  if (num <= 1) {
      return false;
  }
  if (num <= 3) {
      return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
      return false;
  }
  let i = 5;
  while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
          return false;
      }
      i += 6;
  }
  return true;
}

// Функция для вычисления количества простых чисел до N
export function countPrimesUpToN(N) {
  let count = 0;
  for (let i = 2; i <= N; i++) {
      if (isPrime(i)) {
          count++;
      }
  }
  return count;
}

export function calculateExpression(S, T) {
  const result = G(12, S) + G(T, S) - G(2 * S - 1, S * T);
  return result;
}