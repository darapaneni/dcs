from django.contrib import admin
from .models import SMSNotificationTemplate, SMSLog

class SMSNotificationTemplateAdmin(admin.ModelAdmin):
    list_display = ('name', 'content', 'created_at')
    search_fields = ('name', 'content')

class SMSLogAdmin(admin.ModelAdmin):
    list_display = ('phone_number', 'message', 'status', 'created_at')
    search_fields = ('phone_number', 'message')
    list_filter = ('status', 'created_at')

admin.site.register(SMSNotificationTemplate, SMSNotificationTemplateAdmin)
admin.site.register(SMSLog, SMSLogAdmin)
