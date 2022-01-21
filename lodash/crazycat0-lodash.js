var crazycat0={
    chunk:function (array,size=1){
         var temp=new Array(Math.ceil(array.length/size))
         var a=0
         for(var i=0;i<array.length;i++){
            temp[a]?temp[a]:temp[a]=[]
            temp[a].push(array[i])
            if(temp[a].length==size){
               a++
            }
         }
         return temp
   },

   compact:function (array) {
      var Array = []
      for (var i = 0; i < array.length; i++) {
          if (array[i]) { // arry[i]布尔值就为true
              Array.push(array[i])
          }
      }
      return Array

  },
  difference:function(){

  },
  differenceWith:function(){

  }

}