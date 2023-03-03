let myArray = [{transport: "Air",
             load: "Vatican Vaticano",
             created: "01/31/2020"},
            {transport: "Air",
             load: "Paris",
             created: "01/30/2020"}] 

             console.log(myArray.created);
myArray.sort(function(a, b) {
            var c = new Date(a.created);
            var d = new Date(b.created);
            //return c-d;
        });