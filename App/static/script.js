var audio = {    
    init: function() {        
    var $that = this;        
        $(function() {            
            $that.components.media();        
        });    
    },
    components: {        
        media: function(target) {            
            var media = $('audio.fc-media', (target !== undefined) ? target : 'body');            
            if (media.length) {                
                media.mediaelementplayer({                    
                    audioHeight: 40,
                    features : ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                    alwaysShowControls      : true,
                    timeAndDurationSeparator: '<span></span>',
                    iPadUseNativeControls: true,
                    iPhoneUseNativeControls: true,
                    AndroidUseNativeControls: true                
                });            
            }        
        },
            
    },
};

audio.init();

setInterval(function(){
    //xprint("Im here")
    var dt = new Date( );
    //var utcDate = new Date(currentDate.getTime() + (timezoneOffset * 60000));

    $.ajax({
      //url:'/your_url',
      //type:'POST',
      data:{
         current_time:dt.getMilliseconds(),
         //progress:media.features['progress'],
         },
      dataType:'json',
      success:function(response){ console.log(response);},
      error:function(err){console.log(err);}
    });
 },1000);
