let needle ="JS"
let heyStack =["PHP", "JS", "Python"]
let isExist = heyStack.includes(needle)

if (heyStack.includes(needle)) {
    console.log("Founded")
}
else{
    console.log("Not Found")
}
if ( heyStack.indexOf(needle) !=-1) {
    console.log("Founded");
}
else{
    console.log("Not Found")
}
if (  heyStack.lastIndexOf(needle) !=-1) {
    console.log("Founded");
}
else{
    console.log("Not Found")
}