/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

$(document).ready(function() {
    fetchPosts();
    registerListeners();
});

function fetchPosts() {
    $.get('php/cms.php', function(data) {
        var jsonArr = $.parseJSON(data);
        var elementString = '';
        for (var i = 0; i < jsonArr.length; i++) {
            postObject = jsonArr[i];
            elementString += buildPostElement(postObject);
        }
        $('#posts-wrapper').html(elementString);
    });
}

function buildPostElement(post) {
    var postString = '<div class="post text-center">';
    postString += '<h3>' + post['title'] + '</h3>';
    postString += '<p>' + post['content'] + '</p>';
    postString += '<p>Postat ' + post['timestamp'] + '</p>';
    postString += '</div>';
    return postString;
}

function registerListeners() {
    $('.contact-form').submit(function(e) {
        if (validateForm()) {
            $.ajax({
              method: 'post',
              url: 'php/mail.php',
              data: {
                name: $('#name-field').val(),
                email: $('#email-field').val(),
                message: $('#message-field').val(),
              },
              success: function(data) {
                $('#name-field').val('');
                $('#email-field').val('');
                $('#message-field').val('');
                $('#success-message').fadeIn().delay(3000).fadeOut();
              }
            });
        }
        return false;
    });
    

    $('#about img#dave').dblclick(function() {
        festa();
    });
}

function validateForm() {
    var name = $('#name-field').val();
    var email = $('#email-field').val();
    var message = $('#message-field').val();
    var validForm = true;
    
    if (!name) {
        var l = 10;  
        for( var i = 0; i < 10; i++ ) {  
            $('#name-field').animate({'margin-left': "+=" + (l = -l) + 'px'}, 35); 
        }
        validForm = false;
    }
    
    if (!email) {
        var l = 10;  
        for( var i = 0; i < 10; i++ ) {  
            $('#email-field').animate({'margin-left': "+=" + (l = -l) + 'px'}, 35); 
        }
        validForm = false;
    } else {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!re.test(email)) {
            var l = 10;  
            for( var i = 0; i < 10; i++ ) {  
                $('#email-field').animate({'margin-left': "+=" + (l = -l) + 'px'}, 35); 
            }
            validForm = false;
            console.log('fail');
        }
    }
    
    if (!message) {
        var l = 10;  
        for( var i = 0; i < 10; i++ ) {  
            $('#message-field').animate({'margin-left': "+=" + (l = -l) + 'px'}, 35); 
        }
        validForm = false;
    }
    return validForm;
}



