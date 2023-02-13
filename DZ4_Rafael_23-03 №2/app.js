var result = {}
var users = ['name', 'John', 'lastname', 'Black', 'age', '23']


for (var i=0;i< users.length; i+=2){
    result[users[i]] = users[i+1]
}
console.log(result)






let arr = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
let obj={}
for (var i=0;i< arr.length; i++){
    if(arr[i] in obj){
        obj[arr[i]]++
    }else{
        obj[arr[i]]=1
    }
}
console.log(obj)
