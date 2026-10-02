// Concatène des classes en ignorant les valeurs falsy.
export const cn = (...classes) => classes.filter(Boolean).join(' ')
