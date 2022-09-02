window.addEventListener('load',function(){
    gallery_load()
})

function openpic_back(id) {
    var overlay = document.getElementById(id);
    overlay.style.visibility = "visible";
    overlay.style.opacity = "100";
    overlay.getElementsByTagName("img")[0].style.opacity = "100"
    overlay.getElementsByTagName("img")[0].style.top = "50%"
}

function openpic(id) {
    var link = '/dokumentasi/' + id;
    overlay_back();
    overlay_fore("pic_overlay");
    $("#pic").attr("src","")
    $("#pic").addClass("loading")
    $("#pic_judul").addClass("loading")
    $("#pic_deskripsi").addClass("loading")

    $.ajax({
        url: link,
        success: function(data){
            $("#open_pic_message").attr("style", "opacity: 1; animation: fadeout 500ms ease-in-out 1s 1 forwards;")
            $('#pic').attr("src", data.link_gambar);
            $('#pic').attr("alt", data.judul);
            $('#open_pic').attr("href", data.link_gambar);
            $('#pic_judul').html(data.judul);
            $('#pic_deskripsi').html(data.deskripsi)
            $('#pic_overlay').find('.loading').removeClass('loading')
        }
    })
}

function closepic(id) {
    var overlay = document.getElementById(id);
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    overlay.getElementsByTagName("img")[0].style.opacity = "0"
    overlay.getElementsByTagName("img")[0].style.top = "45%"
}

function addThumbnailSource(str){
	var new_str = str.substring(0, str.length - 4);
	new_str += "m";
	new_str += ".jpg";
	return new_str;
}

// Loads picture thumbnails
function gallery_load() {
    var win = $(window)
    var elements = $(".frame").not(".already_visible")
    elements.each(function(i,el){
        var el = $(el)
        if (el.visible(true)) {
            el.addClass('already_visible')
            str = el.attr('onclick') 
            id = str.substring(9, str.length-2)
            dokum_ajax(el, ('/dokumentasi/' + id))
        }
    })

    win.scroll(function(event) {
        var elements = $(".frame").not(".already_visible")
        elements.each(function(i,el){
            var el = $(el)
            if (el.visible(true)) {
                el.addClass('already_visible')
                str = el.attr('onclick') 
                id = str.substring(9, str.length-2)
                dokum_ajax(el, ('/dokumentasi/' + id))
            }
        })
    })
}

// Loads individual picture thumbnails
// Not so efficient lmao
function dokum_ajax(el, link) {
    $.ajax({
        url: link,
        success: function(data){
			var str = addThumbnailSource(data.link_gambar);
            img = el.find("img")
            img.attr('src', str)
            img.css('margin-top', '0%')
            setTimeout(function(){el.removeClass("loading");}, 300);
        }
    })
}