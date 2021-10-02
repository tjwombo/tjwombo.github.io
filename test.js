console.log("test");
$.ajax({
  type: "POST",
  url: "test.py",
  data: { param: "test"}
}).done(function( o ) {
   // do something
});
