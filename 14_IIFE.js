// global scope ke pollution ko hatane k liye immediate invoked function ka use kita jatat ha


(function chai() {
    console.log(`DB connected`);
})();

( ()=>{
    console.log(`DBTWO connected`);
})();