var list = []
function addtolist() { 
var inp = document.getElementById('input')
list.push(inp.value)
console.log(list)
inp.value = ''
}

function display(){
    document.write('<h3>Your Daily Tasks</h3>')
    for(i = 0 ; i < list.length ;i++)
    {
        document.write(list[i])
        document.write('<br>')
    }
}