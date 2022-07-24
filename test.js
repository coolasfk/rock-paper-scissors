btn = document.getElementById('btn');
btn2 = document.getElementById('btn2');
print = document.getElementById('print')

a = 1

function apple(){
    a++
    console.log(a)
}
btn.addEventListener('click', apple)

btn2.addEventListener('click', () => {
  
    btn.removeEventListener('click', apple)
})


