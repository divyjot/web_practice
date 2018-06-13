
//*******************POP*****************
arr=[1,2,3,4,5,6,7,8];
arr2=[];
console.log("BEFORE POP")
console.log(arr)
for(var a=0;a<(arr.length-1);a++)
  {
    arr2[a]=arr[a];
  }
console.log("AFTER POP")
console.log(arr[arr.length-1])
arr=arr2
console.log(arr)

//******************PUSH****************

arr=[1,2,3,4,5,6,7,8];
console.log("BEFORE PUSH")
console.log(arr)
var newVar=9;
arr[arr.length]=newVar
console.log("AFTER PUSH")
console.log(arr.length)
console.log(arr)

//**************REVERSE***********
var arr=[0,1,2,3,4,5]
var x
for(var i=0;i<arr.length;i++)
  {
    if(i<arr.length-1-i)
      {
        x=arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=x;
      }
  }
console.log(arr)

//***************SHIFT***************

arr=[1,2,3,4,5]
console.log("BEFORE SHIFT")
console.log(arr)
console.log("AFTER SHIFT")
console.log(arr[0])
for(var i=0;i<arr.length-1;i++)
  {
    arr[i]=arr[i+1]
  }
arr.pop()
console.log(arr)

//**************UNSHIFT***************

arr=[1,2,3,4,5]
console.log("BEFORE UNSHIFT")
console.log(arr)
for(var i=arr.length-1;i>=0;i--)
  {
    arr[i+1]=arr[i]
  }
arr[0]=0
console.log("AFTER UNSHIFT")
console.log(arr.length)
console.log(arr)
