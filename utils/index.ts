export { stringAvatar } from "./stringAvatar";

export const objParse = <T>(obj: T, parser = parseInt) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: parser(value) }),
    {} as { [P in keyof T]: number }
  );
