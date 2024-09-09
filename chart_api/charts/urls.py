from django.urls import path
from . import views

urlpatterns = [
    path("bar_chart_data/", views.bar_chart_data, name="bar_chart_data"),
    path("line_chart_data/", views.line_chart_data, name="line_chart_data"),
    path("pie_chart_data/", views.pie_chart_data, name="pie_chart_data"),
    path(
        "candlestick_chart_data/",
        views.candlestick_chart_data,
        name="candlestick_chart_data",
    ),
]
