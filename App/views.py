from django.shortcuts import render

# Create your views here.
from django.core.paginator import Paginator
from . models import Song
from yandex_music import Client

client = Client('y0_AgAAAAAa3wxhAAG8XgAAAADyfz_lsiMC9PmHRFyrDyd1Rmz_YlR-DVk').init()

def index(request):
    urls = client.users_likes_tracks()

    paginator= Paginator(Song.objects.all(),1)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context={"page_obj":page_obj}
    return render(request,"index.html",context)



from django.http import JsonResponse
import json

def ajax_post_view(request):
    data_from_post = json.load(request)['post_data'] #Get data from POST request
    #Do something with the data from the POST request
    #If sending data back to the view, create the data dictionary
    moment_of_lisen = data_from_post['send_time'] + data_from_post['progress']
    data = {
        'my_data':moment_of_lisen,
    }
    return JsonResponse(data)