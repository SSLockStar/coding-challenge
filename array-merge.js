  /**
   * Given an array list of n arrays of an object of type:
   * {
   *  val1: number;
   *  val2: number;
   * }
   *
   * Create a function, without any built in library functions, that returns a single sorted list of all the
   * objects sorted by their values (higher numbers results in higher priority).
   * Sort priority is first based on value1, and then on value2.
   *
   * Example 1:
   * Given: []
   * Returns: []
   * 
   * Example 2:
   * Given: [[{val1: 1, val2: 2}], [{val1: 5, val2: 1}]]
   * Returns: [{val1: 5, val2: 1}, {val1: 1, val2: 2}]
   *
   * Example 3:
   * Given:
   * [
   *    [
   *      {val1: 3, val2: 2},
   *      {val1: 5, val2: 3},
   *    ],
   *    [
   *      {val1: 3, val2: 3},
   *      {val1: 5, val2: 4},
   *    ],
   *    [
   *      {val1: 1, val2: 5},
   *      {val1: 1, val2: 3},
   *    ]
   * ];
   * Returns:
   * [
   *    {val1: 5, val2: 4},
   *    {val1: 5, val2: 3},
   *    {val1: 3, val2: 3},
   *    {val1: 3, val2: 2},
   *    {val1: 1, val2: 5},
   *    {val1: 1, val2: 3}
   * ]
   */
   
   function mergeSortLists(given){
   		let mergeList = [];
   		if(given.length === 0){
      	console.log(mergeList);
        return;
      } 
      for(let i =0; i< given.length; i++){
      		mergeList = mergeList.concat(given[i]);
      }         		
      
      mergeList.sort(function(a,b){
      	return (b.val1+b.val2)-(a.val1+a.val2);
      })
      
      mergeList=mergeList.map(function(d){
      	if(d.val1<d.val2){
        	return {val1:d.val2, val2:d.val1}
        }else{
        	return d;
        }
      })
            
      console.log(mergeList);
   }
   
   const givenData1=[];
   const givenData2= [[{val1: 1, val2: 2}], [{val1: 5, val2: 1}]];
    const givenData3= [
      [
        {val1: 3, val2: 2},
        {val1: 5, val2: 3},
      ],
      [
        {val1: 3, val2: 3},
        {val1: 5, val2: 4},
      ],
      [
        {val1: 1, val2: 5},
        {val1: 1, val2: 3},
      ]
    ];   
  mergeSortLists(givenData3)