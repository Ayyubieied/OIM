// Brings up daftar n berkas overlay
function uploadon(id) {
    overlay_back();
    overlay_fore(id);
}

// Set timeout. 1000 = 1 sec
refreshIntervalId = setInterval(function () {
    $("#load_message").fadeIn()
}, 10000)

// Brings up competition overlay
function on(id){
    var link = '/overlaycompe/' + id;
    var lastClass = $('#overlay_foreground').attr('class').split(' ').pop();
    if (lastClass != "overlay_foreground") {
        $('#overlay_foreground').removeClass(lastClass);
    } 

    $('#overlay_namalomba').addClass("loading");
    $('#overlay_deskripsi').addClass("loading");
    $('#overlay_viewnamalomba').addClass("loading");
    $('#overlay_waktu').addClass("loading");
    $('#overlay_tempat').addClass("loading");
    $('#overlay_linklomba').addClass("loading");
    $('#reg').addClass("loading");
    $('#overlay_partisipan h1').addClass("loading");
    $('#overlay_partisipan h2').addClass("loading");

    overlay_back();
    overlay_fore("overlay_foreground");

    $.ajax({
        url: link,
        success: function(data){
            offLoading()
            $('#overlay_namalomba').html(data.nama_lomba);
            $('#overlay_foreground').addClass(data.tipe);
            document.getElementById('overlay_deskripsi').innerHTML = data.deskripsi;
            document.getElementById('overlay_viewnamalomba').innerHTML = "View All " + data.nama_lomba + " Events";
            document.getElementById('overlay_viewnamalomba').href = "/timeline/" + data.tipe;
            document.getElementById('overlay_waktu').innerHTML = data.tanggal+ "<br>" + data.waktu; 
			if (data.registration_link == ""){
				document.getElementById('reg').style.visibility = "hidden";
			}else{
				document.getElementById('reg').style.visibility = "visible";
				document.getElementById('reg').href = data.registration_link;
			}
            document.getElementById('overlay_tempat').innerHTML = data.tempat;
            document.getElementById('overlay_linklomba').innerHTML = data.activity;
            document.getElementById('overlay_linklomba').href = data.link_platform;
            var partisipan1 = '';
            var datapart = data.partisipan;
            for (var i = 0; i < datapart.length; i++) {
                partisipan1 += '<h1 class="versus"><b>' + datapart[i].nama + '</b></h1><h2><b>' + datapart[i].npm + '</b> ' + datapart[i].fakultas + '</h2>';
            }
            $('#overlay_partisipan').html(partisipan1)
        }
    })
}

// Activate overlay background
function overlay_back() {
    var overlay = document.getElementById("overlay");
    overlay.style.visibility = "visible";
    overlay.style.opacity = "100";
}

// Activate overlay foreground
function overlay_fore(id) {
    var fore = document.getElementById(id);
    fore.style.visibility = "visible";
    fore.style.opacity = "100";
    fore.style.top = "50%";
}

// Brings down overlay
function off() {
    var overlay = document.getElementById('overlay');
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    var fore = document.getElementsByClassName("fore");
    for (var i = 0; i < fore.length; i++) {
        fore[i].style.visibility = "hidden"
        fore[i].style.opacity = "0"
        fore[i].style.top = "45%"
    }
    setTimeout(function() {
        partisipan = '<h1 class="versus">Nama Anggota</h1><h2> NPM Fakultas</h2>';
        $('#overlay_partisipan').html(partisipan);
    }, 300);
}

// Loading animation begone
function offLoading() {
    $('.loading').removeClass("loading");
}

// Loader begone
window.addEventListener('load',function(){
    $("#loader").fadeOut()
    clearInterval(refreshIntervalId)
})

// Loader be-not-gone
function onLoader() {
    $("#loader").fadeIn()
}

// Buttons that activates loader
buttons = $('a')
buttons.each(function(i, but){
    but = $(but)
    if (but.attr('href')!=undefined && but.attr('target')!='_blank') {
        $(but).click(onLoader)
    }
})

// Yes
function goBack() {
    window.history.back()
}