$ (function(){

    // Filter
    // ==============

    var filter = $("[data-filter]");

    filter.on("click", function(event){
        event.preventDefault();
         
        var cat = $(this).data('filter');

        if(cat == 'all'){
            $('[data-cat]').removeClass("hide");
        } else {

            $("[data-cat]").each(function(){
                var workCat = $(this).data('cat');
                
                if (workCat != cat) {
                    $(this).addClass('hide');
                }else{
                    $(this).removeClass('hide');
                }
            });
        }       
    });



        /* Modal
    =====================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
    
});
