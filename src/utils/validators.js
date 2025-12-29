export function required(val) {
  return val ? null : "Required";
}

export function minLength(len) {
  return (val) => (val && val.length >= len ? null : `Min length ${len}`);
}
