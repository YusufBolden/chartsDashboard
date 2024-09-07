from django.contrib import admin
from .models import CandlestickData, LineChartData, BarChartData, PieChartData


@admin.register(CandlestickData)
class CandlestickDataAdmin(admin.ModelAdmin):
    list_display = ("date", "open", "high", "low", "close")
    search_fields = ("date",)


@admin.register(LineChartData)
class LineChartDataAdmin(admin.ModelAdmin):
    list_display = ("label", "value")
    search_fields = ("label",)


@admin.register(BarChartData)
class BarChartDataAdmin(admin.ModelAdmin):
    list_display = ("label", "value")
    search_fields = ("label",)


@admin.register(PieChartData)
class PieChartDataAdmin(admin.ModelAdmin):
    list_display = ("label", "value")
    search_fields = ("label",)
