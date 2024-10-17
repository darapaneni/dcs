from django.apps import AppConfig


class NotifapiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'notifApi'

def ready(self):
    import notifApi.signals
