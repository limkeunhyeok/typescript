const init = (callback: () => void): void => {
  console.log("1")
  callback()
  console.log("3")
}

init(() => console.log("2"))
// 1
// 2
// 3
