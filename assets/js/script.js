$(document).ready(function() {
    $("#button_effects1").click(function(){
        $('#par1').toggle('1000');
        
    });
    $("#button_effects2").click(function(){
        $('#par2').toggle('1000');
    });
    $("#button_effects3").click(function(){
        $('#par3').toggle('1000');
    });
    $("#button_effects1").mouseenter(function(){
        $(this).addClass("highlight");
    });
     $("#button_effects1").mouseleave(function(){
        $(this).removeClass("highlight");
    });
     $("#button_effects2").mouseenter(function(){
        $(this).addClass("highlight");
    });
    
     $("#button_effects2").mouseleave(function(){
        $(this).removeClass("highlight");
    });
     $("#button_effects3").mouseenter(function(){
        $(this).addClass("highlight");
    });
     $("#button_effects3").mouseleave(function(){
        $(this).removeClass("highlight");
    });
    
}); 



$('.SeeMore2').click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore2');
    if($this.hasClass('SeeMore2')){
        $this.text('See More');         
    } else {
        $this.text('See Less');
    }
});


