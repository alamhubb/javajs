function dudu() {
  console.log(this.name)
}

const a = {
  name: 'aaa',
  hello: () => {
    console.log(this.name)
  }
}
const b = a.hello

b()


console.log(typeof b)
