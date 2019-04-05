var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  kittenss = [...kittens, name]
  return kittenss
}

function prependKitten(name) {
  kittenss = [name, ...kittens]
  return kittenss
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}

