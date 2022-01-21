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
  differenceBy:function(){

  },
  differenceWith:function(){

  },
  drop:function(){

  },
  dropRight:function(){

  },
  dropRightWith:function(){

  },
  fill:function(){

    },
    findIndex:function(){

    },
    findLastIndex:function(){

    },
    flatten:function(){

    },
    flattenDeep:function(){

    },flattenDepth:function(){

    },
        fromPairs:function(){

    },head:function(){

    },indexOf:function(){

    },initial:function(){

    },join:function(){

    },last:function(){

    },lastIndexOf:function(){

    },reverse:function(){

    },
    uniq:function(){

    },
    uniqBy:function(){

    },
    without:function(){

    },
    zip:function(){

    },
    countBy:function(){

    },
    every:function(){

    },
    filter:function(){

    },
    find:function(){

    },
    forEach:function(){

    },
    groupBy:function(){

    },
    keyBy:function(){

    },
    map:function(){

    },
     artition:function(){

    },
    reduce:function(){


    },
    reduceRight:function(){


    },
    reject:function(){


    },
    sample:function(){


    },
    shuffle:function(){


    },
    size:function(){


    },
    some:function(){

    },

    isBoolean:function(){

    },
    isEmpty:function(){

    },
    isEqual:function(){

    },

    isNaN:function(){

    },
    isNil:function(){

    },
    isNull:function(){

    },
    isNumber:function(){

    },

    toArray:function(){

    },

    ceil:function(){

    },
    max:function(){

    },
    maxBy:function(){

    },
    sumBy:function(){

    },
    sum:function(){

    },
    repeat:function(){

    },
    range:function(){

    },
    cloneDeep:function(){

    },





}