from django.test import TestCase


class ChartDataTests(TestCase):
    def test_bar_chart_data(self):
        response = self.client.get("/api/bar-chart-data/")
        self.assertEqual(response.status_code, 200)

    def test_candlestick_data(self):
        response = self.client.get("/api/candlestick-data/")
        self.assertEqual(response.status_code, 200)

    def test_line_chart_data(self):
        response = self.client.get("/api/line-chart-data/")
        self.assertEqual(response.status_code, 200)

    def test_pie_chart_data(self):
        response = self.client.get("/api/pie-chart-data/")
        self.assertEqual(response.status_code, 200)
