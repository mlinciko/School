export const getResultTask18 = async (req, res, next) => {
  try {
    const result = []
    for (let x = 3; x >= -8; x -= 0.9) {
      const z = Math.log(Math.abs(x)) + Math.tan(2 * x);
      if (z > 2) {
          result.push(`x = ${x}, z = ${z}`);
      }
  }
    res
      .status(200)
      .json(result)

  } catch (e) {
    console.log('*getResultTask18 service')
    next(e)
  }
}

export const getResultTask21 = async (req, res, next) => {
  try {
    let result = findFirstDigit(req.query?.number);
    
    res
      .status(200)
      .json(result)

  } catch (e) {
    console.log('*getResultTask21 service')
    next(e)
  }
}

export const getResultTask24 = async (req, res, next) => {
  try {
    let result = smallestPowerOf5GreaterThanN(req.query?.number);
    
    res
      .status(200)
      .json(result)

  } catch (e) {
    console.log('*getResultTask24 service')
    next(e)
  }
}

export const getResultTask27 = async (req, res, next) => {
  try {
    let result = isPowerOf4(req.query?.number);
    
    res
      .status(200)
      .json(result)

  } catch (e) {
    console.log('*getResultTask27 service')
    next(e)
  }
}

export const getResultTask30 = async (req, res, next) => {
  try {
    let result = findFirstNegativeTerm();
    
    res
      .status(200)
      .json(result)

  } catch (e) {
    console.log('*getResultTask30 service')
    next(e)
  }
}

function findFirstDigit(number) {
  const numStr = Math.abs(number).toString();
  
  for (let i = 0; i < numStr.length; i++) {
      if (!isNaN(parseInt(numStr[i]))) {
          return parseInt(numStr[i]);
      }
  }
  
  return null;
}

function smallestPowerOf5GreaterThanN(N) {
  let k = 0;
  let powerOf5 = 1;
  while (powerOf5 <= N) {
      k++;
      powerOf5 *= 5;
  }
  return powerOf5;
}

function isPowerOf4(N) {
  if (N <= 0) {
      return false;
  }

  const logBase4 = Math.log(N) / Math.log(4);
  return Number.isInteger(logBase4);
}

function findFirstNegativeTerm() {
  let n = 1;

  while (true) {
      const term = Math.cos(1 / Math.tan(n));

      if (term < 0) {
          return term;
      }

      n++;
  }
}
