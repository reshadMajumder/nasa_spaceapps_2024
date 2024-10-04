import asyncio
import threading
import time
import httpx
from django.core.cache import cache
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Global variable to store fetched exoplanet data
CACHE_KEY = 'exoplanet_data'
CACHE_TTL = 60 * 10  # Cache timeout in seconds (e.g., 10 minutes)

async def fetch_data():
    url = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.json()

def start_fetching():
    while True:
        fetched_data = asyncio.run(fetch_data())
        cache.set(CACHE_KEY, fetched_data, timeout=CACHE_TTL)
        print("Data fetched and cached successfully.")
        time.sleep(10)

# Start the background thread to fetch data continuously
thread = threading.Thread(target=start_fetching)
thread.daemon = True
thread.start()

@api_view(['GET'])
def get_exoplanet_data(request):
    # Get cached data or return an error if it does not exist
    data = cache.get(CACHE_KEY)
    if data is None:
        return Response({"error": "No data available."}, status=status.HTTP_404_NOT_FOUND)
    return Response(data[:10], status=status.HTTP_200_OK)
