function makeUL() {
    var list = document.getElementsByClassName('area')[0];

    console.log(list);

    for(var i = 0; i < 105; i++) {
        var item = document.createElement('div');
        $(item).addClass('rect light');
        list.appendChild(item);
    }
    return list;
}

makeUL();

var counter = 0;
var progress = document.getElementById('progress');

$('.rect').on('click', function(e) {
    var that = $(e.target);
    counter += that.hasClass('light') ? 1 : -1;
    that.toggleClass("light dark"); //you can list several class names
    e.preventDefault();
    console.log(counter);
    progress.setAttribute('value', counter);
});
