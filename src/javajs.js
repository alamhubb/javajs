const script = document.getElementsByTagName('script')[0]
var newNodeBottom = document.createElement("script");
newNodeBottom.text = script.text
const body = document.getElementsByTagName('body')[0]
body.appendChild(newNodeBottom)
