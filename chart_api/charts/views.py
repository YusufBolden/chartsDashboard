from django.http import JsonResponse
import random
from datetime import datetime, timedelta


# Helper function to generate random data
def generate_random_data(num_points=10):
    return [random.randint(10, 100) for _ in range(num_points)]


# Bar chart data
def bar_chart_data(request):
    data = {
        "labels": ["Category A", "Category B", "Category C", "Category D"],
        "values": generate_random_data(4),
    }
    return JsonResponse(data)


# Line chart data
def line_chart_data(request):
    labels = [
        (datetime.now() - timedelta(days=i)).strftime("%Y-%m-%d") for i in range(10)
    ]
    values = generate_random_data(10)

    data = {
        "labels": labels,
        "values": values,
    }
    return JsonResponse(data)


# Pie chart data
def pie_chart_data(request):
    data = {
        "labels": ["Section A", "Section B", "Section C"],
        "values": generate_random_data(3),
    }
    return JsonResponse(data)


# Candlestick chart data
def candlestick_chart_data(request):
    data = {
        "x": [
            "2024-09-08",
            "2024-09-07",
            "2024-09-06",
            "2024-09-05",
            "2024-09-04",
            "2024-09-03",
            "2024-09-02",
            "2024-09-01",
            "2024-08-31",
            "2024-08-30",
        ],
        "open": [24, 19, 57, 23, 17, 59, 55, 74, 54, 55],
        "high": [105, 104, 92, 93, 31, 31, 43, 114, 36, 107],
        "low": [75, 64, 55, 1, 87, 15, 27, 1, 32, 10],
        "close": [81, 36, 98, 68, 77, 94, 19, 80, 75, 91],
    }
    return JsonResponse(data)

    # OHLC data (Open, High, Low, Close)
    data = {
        "labels": labels,
        "open": generate_random_data(10),
        "high": [x + random.randint(5, 15) for x in generate_random_data(10)],
        "low": [x - random.randint(5, 15) for x in generate_random_data(10)],
        "close": generate_random_data(10),
    }
    return JsonResponse(data)
