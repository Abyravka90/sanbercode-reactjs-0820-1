function Clock(template,uji ) {
  
  
    function render() {      
  
      var output = template;
      var keluar = uji;
  
      console.log(output);
      console.log(uji);
    }
  
    this.start = function() {
      render();
      
    };
  
  }
  
  let uji = {template : 'h:m:s', name : 'asep'};

  var clock = new Clock(uji.template, uji.name);
  clock.start(); 