import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const merge = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};

export { merge };
