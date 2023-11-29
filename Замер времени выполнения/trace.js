
export const trace = function (count) {
  const startTime = Date.now();

  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  try {
    fib(count);
  } catch (error) {
    console.log('Ошибка расчетов:', error);
    return 'Ошибка расчетов';
  } finally {
    const duration = Date.now() - startTime;
    return duration;
  }
};