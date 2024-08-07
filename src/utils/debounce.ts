const debounce = <T extends (...args: any[]) => void>(callbackFunction: T, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callbackFunction(...args), delay);
  };
};

export default debounce;
