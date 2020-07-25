let l=prompt("What is the max number");
if (l<=0){
  alert("0 should not be entered")
}
for (var limit = 2; limit < l; limit++) {
           var a = false;
           for (var i = 2; i <= l; i++) {
              if (limit%i==0 && i!==limit) {
                 a = true;
              }
           }
           if (a === false) {
              console.log(limit);
           }
        }
