
$(document).ready(function() {
    // Exercise 2
    $('h3'); // Find all H3 tags
    $('#contant').html('This is new content!'); // Replace content of #contant
    $('img').attr('src', 'https://via.placeholder.com/150'); // Change image source
    $('.sideBarListBox').toggle(); // Toggle visibility of .sideBarListBox
    $('li:contains("Lorem")').css('text-decoration', 'underline'); // Underline "Lorem"
    $('.sideBarListBox a').css({'color': 'blue', 'font-weight': 'bold'}); // Style links

    // Exercise 3
    $('#fadeInBtn').click(function() {
        $('h1').fadeIn(1000);
    });

    $('#fadeOutBtn').click(function() {
        $('h1').fadeOut(1000);
    });

    $('#slideUpBtn').click(function() {
        $('#mainContent').slideUp(1000);
    });

    $('#slideDownBtn').click(function() {
        $('#mainContent').slideDown(1000);
    });

    $('#animDiv').click(function() {
        $(this).animate({left: '+=200px', backgroundColor: '#f0ad4e'}, 1000);
    });

    // Exercise 4
    $('#contentLoader').change(function () {
        const value = $(this).val();
        if (value === 'first') {
            $('#contentDiv').load('https://meijastiina.github.io/news_rss_topstories.xml');
        } else if (value === 'second') {
            $('#contentDiv').html('<p>This is content for the second item.</p>');
        } else if (value === 'third') {
            $('#contentDiv').html('<p>This is content for the third item.</p>');
        }
    });
});
