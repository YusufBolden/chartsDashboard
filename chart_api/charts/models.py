from django.db import models

# charts/models.py
from django.db import models


class CandlestickData(models.Model):
    date = models.DateField()
    open = models.DecimalField(max_digits=10, decimal_places=2)
    high = models.DecimalField(max_digits=10, decimal_places=2)
    low = models.DecimalField(max_digits=10, decimal_places=2)
    close = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.date}: Open {self.open}, Close {self.close}"


class LineChartData(models.Model):
    label = models.CharField(max_length=255)
    value = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.label}: {self.value}"


class BarChartData(models.Model):
    label = models.CharField(max_length=255)
    value = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.label}: {self.value}"


class PieChartData(models.Model):
    label = models.CharField(max_length=255)
    value = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.label}: {self.value}"
