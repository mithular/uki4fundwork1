SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
 SC.stream('/tracks/494022999',function(sound){
 $('#start').click(function(e) {
            e.preventDefault();
            sound.start();
          });
          $('#stop').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });

               });
                })
                 SC.stream('/tracks/506993319',function(sound){
                 $('#start2').click(function(e) {
                            e.preventDefault();
                            sound.start();
                          });
                          $('#stop2').click(function(e) {
                                   e.preventDefault();
                                   sound.stop();
                                 });

});
 });
