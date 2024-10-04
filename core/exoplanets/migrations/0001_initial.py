# Generated by Django 5.1.1 on 2024-10-04 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Exoplanet',
            fields=[
                ('kepid', models.BigIntegerField(primary_key=True, serialize=False)),
                ('kepoi_name', models.CharField(max_length=255)),
                ('kepler_name', models.CharField(max_length=255)),
                ('koi_disposition', models.CharField(max_length=50)),
                ('koi_pdisposition', models.CharField(max_length=50)),
                ('koi_score', models.FloatField()),
                ('koi_period', models.FloatField()),
                ('koi_time0bk', models.FloatField()),
                ('koi_impact', models.FloatField()),
                ('koi_duration', models.FloatField()),
                ('koi_depth', models.FloatField()),
                ('koi_prad', models.FloatField()),
                ('koi_teq', models.FloatField()),
                ('koi_insol', models.FloatField()),
                ('koi_model_snr', models.FloatField()),
                ('koi_steff', models.FloatField()),
                ('koi_slogg', models.FloatField()),
                ('koi_srad', models.FloatField()),
                ('ra_str', models.CharField(max_length=50)),
                ('dec_str', models.CharField(max_length=50)),
                ('koi_kepmag', models.FloatField(null=True)),
            ],
        ),
    ]
