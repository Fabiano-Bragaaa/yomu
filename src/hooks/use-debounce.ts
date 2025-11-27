import { useEffect, useState } from 'react';

/**
 * @description https://usehooks-ts.com/react-hook/use-debounce
 * @param value to be debounced
 * @param delay  in milliseconds `default: 500 ms`
 * @returns debounced value
 */
export function useDebounce<T>(
  value: T,
  delay = 500
): { debouncedValue: T; isDebouncing: boolean } {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay);

    return () => {
      clearTimeout(timer);
      setIsDebouncing(false);
    };
  }, [value, delay]);

  return { debouncedValue, isDebouncing };
}
