$(function() {
    
    const nav_items = $('.nav-item');
    const nav_links = $('.nav-item .nav-link')
    
    function activeNavItems(nav_items, nav_links) {
        for( let i = 0; i< nav_links.length; i++) {
            if($(nav_links[i]).attr('href') == window.location.pathname) {
                $(nav_items[i]).addClass('active');
            }
        }
    }

        activeNavItems(nav_items, nav_links);

})