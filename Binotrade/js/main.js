/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

$(document).ready((function() {
    $('.top__heading').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInDown', 
        offset: 50
    }); 
    $('#itemsCard-1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', 
        offset: 50
    }); 
    $('#itemsCard-2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight', 
        offset: 50
    });
    $('#itemsCard-3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', 
        offset: 50
    });
    $('#itemsCard-4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight', 
        offset: 50
    });

    $('#myTab').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', 
        offset: 100
    }); 

    $('#myTabContent').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp', 
        offset: 200
    }); 
    
    $('#company-1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft', 
        offset: 200
    }); 
    $('#company-2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInDown', 
        offset: 200
    }); 
    $('#company-3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp', 
        offset: 200
    }); 
    $('#company-4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInDown', 
        offset: 200
    }); 
    $('#company-5').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight', 
        offset: 200
    }); 
    $('#company-6').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft', 
        offset: 200
    }); 
    $('#company-7').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp', 
        offset: 200
    }); 
    $('#company-8').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInDown', 
        offset: 200
    }); 
    $('#company-9').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp', 
        offset: 200
    }); 
    $('#company-10').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight', 
        offset: 200
    }); 
    $(' .mobile-apps__text').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft', 
        offset: 200
    });
    $('.mobile-apps__phone:nth-child(3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight', 
        offset: 600
    });  
    $('.binotrade').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp', 
        offset: 200
    }); 
    $('.footer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight', 
        offset: 200
    }); 
}));


