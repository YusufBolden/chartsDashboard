from django.urls import reverse
from rest_framework.test import APITestCase


class ChartsApiTests(APITestCase):

    def test_bar_chart_data(self):
        url = reverse("bar_chart_data")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertIn("labels", response.json())
        self.assertIn("values", response.json())

    def test_line_chart_data(self):
        url = reverse("line_chart_data")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertIn("labels", response.json())
        self.assertIn("values", response.json())

    def test_candlestick_chart_data(self):
        url = reverse("candlestick_chart_data")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        response_data = response.json()
        self.assertIn("x", response_data)
        self.assertIn("open", response_data)
        self.assertIn("high", response_data)
        self.assertIn("low", response_data)
        self.assertIn("close", response_data)

    def test_pie_chart_data(self):
        url = reverse("pie_chart_data")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        response_data = response.json()
        self.assertIn("labels", response_data)
        self.assertIn("values", response_data)
