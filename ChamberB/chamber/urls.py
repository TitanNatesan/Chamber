from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import test_token, signupview, create_form1, create_form2, get_user_information, process_payment, events_view, ApproveApplicaton, contact_view, MembersView,check_token,singleApplication
#  ,
urlpatterns = [
    path('test_token/', test_token, name="test_token"),
    path('signup/', signupview, name='signup'),
    path('form1/', create_form1, name='create_form1'),
    path('form2/', create_form2, name='create_form2'),
    path('user/', get_user_information, name="user_page_view"),
    path('events/', events_view, name='Events'),
    path('process-payment/', process_payment, name='process_payment'),
    path('members/', MembersView, name='Members View'),
    path('contact/', contact_view, name='contact'), 
    path('formadmin/', ApproveApplicaton, name='formadmin_view'),
    path("checkAccess/",check_token,name="check_token"),
    path('application/<int:id>/', singleApplication, name='singleApplication'),
    path('payment/', views.payment, name='payment'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)