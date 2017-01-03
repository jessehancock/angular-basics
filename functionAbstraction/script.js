var work = function(){
  console.log("working hard");
}

var hello = function(){
  console.log("hello world");
}

var doWork = function(f){
  console.log("starting");
  try {
    f();
  } catch (e) {
    console.log(e);
  }
  console.log("end");
}

doWork(work);
doWork(hello);
