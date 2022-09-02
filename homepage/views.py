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
    elif competition == "pkmgfk":
        url = 'timeline_pkmgfk.html'
    elif competition == "pkmgt":
        url = 'timeline_pkmgt.html'
    elif competition == "pkmk":
        url = 'timeline_pkmk.html'
    elif competition == "pkmkc":
        url = 'timeline_pkmkc.html'
    elif competition == "pkmpi":
        url = 'timeline_pkmpi.html'
    elif competition == "pkmpm":
        url = 'timeline_pkmpm.html'
    elif competition == "pkmr":
        url = 'timeline_pkmr.html'
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
