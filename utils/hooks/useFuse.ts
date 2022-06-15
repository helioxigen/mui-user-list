import Fuse from "fuse.js";
import { useMemo, useState } from "react";

export const useFuse = <T>(
  list: T[],
  initialValue: string = "",
  options?: Fuse.IFuseOptions<T>
): [T[], string, (value: string) => void] => {
  const [value, setValue] = useState<string>(() => initialValue);

  const fuse = useMemo(() => {
    return new Fuse(list, options);
  }, [list, options]);

  const results = useMemo(() => {
    return fuse.search(value).map((result) => result.item);
  }, [fuse, value]);

  return [value ? results : list, value, setValue];
};
