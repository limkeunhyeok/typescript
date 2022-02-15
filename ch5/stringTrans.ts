const split = (str: string, delim: string = ""): string[] => str.split(delim)
console.log(
  split("hello"), // [ 'h', 'e', 'l', 'l', 'o' ]
  split("h_e_l_l_o", "_") // [ 'h', 'e', 'l', 'l', 'o' ]
)

const join = (strArray: string[], delim: string = ""): string => strArray.join(delim)
console.log(
  join(["h", "e", "l", "l", "o"]), // hello
  join(["h", "e", "l", "l", "o"], "_") // h_e_l_l_o
)
