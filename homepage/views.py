from django.shortcuts import render


def homepage(request):
    return render(request, "homepage.html")

def about(request):
    return render(request, 'about.html')

def competitions(request):
    return render(request, 'competitions.html')

def booklets(request):
    return render(request, 'booklets.html')

def timeline(request, competition):
    url = ''
    if competition == "debat" :
        url = 'timeline_debat.html'
    elif competition == "quiz":
        url = 'timeline_quiz.html'
    elif competition == "essay":
        url = 'timeline_essay.html'
    elif competition == "poster":
        url = 'timeline_poster.html'
    elif competition == "pkmai":
        url = 'timeline_pkmai.html'
    elif competition == "pkmvgk":
        url = 'timeline_pkmvgk.html'
    elif competition == "pkmgft":
        url = 'timeline_pkmgft.html'
    elif competition == "pkmk":
        url = 'timeline_pkmk.html'
    elif competition == "pkmkc":
        url = 'timeline_pkmkc.html'
    elif competition == "pkmpi":
        url = 'timeline_pkmpi.html'
    elif competition == "pkmpm":
        url = 'timeline_pkmpm.html'
    elif competition == "pkmre":
        url = 'timeline_pkmre.html'
    elif competition == "pkmrsh":
        url = 'timeline_pkmrsh.html'
    elif competition == "pkmki":
        url = 'timeline_pkmki.html'
    elif competition == "all":
        url = 'timeline.html'
    else :
        url = 'error/404.html'
    return render(request, url)

def handler404(request, exception):
    return render(request, 'error/404.html',status=404)

def handler500(request):
    return render(request, 'error/500.html', status=500)

def gallery(request):
    return render(request, 'gallery.html')

def pagenotavailable(request):
    return render(request, '503.html')   
