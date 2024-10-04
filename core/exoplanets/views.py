import asyncio
import threading
import time
import httpx
from django.core.cache import cache
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Constants for cache and retry management
CACHE_KEY = 'exoplanet_data'
CACHE_TTL = 60 * 10  # Cache timeout in seconds (e.g., 10 minutes)
RETRY_INTERVAL = 10  # Retry interval in seconds
MAX_RETRIES = 5  # Maximum number of retries for fetching data

# Asynchronous function to fetch data from the external API
async def fetch_data():
    url = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json"
    try:
        async with httpx.AsyncClient(timeout=40.0) as client:
            response = await client.get(url)
            response.raise_for_status()  # Raise an exception for HTTP errors
            return response.json()
    except httpx.HTTPStatusError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except httpx.RequestError as req_err:
        print(f"Request error occurred: {req_err}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    return None

# Function to start the continuous fetching of data
def start_fetching():
    loop = asyncio.new_event_loop()  # Create a new event loop
    asyncio.set_event_loop(loop)  # Set the loop for the current thread
    loop.run_until_complete(continuous_fetch())

# Asynchronous function to handle continuous fetching with retries and caching
async def continuous_fetch():
    retry_attempt = 0

    while True:
        print(f"Fetching data... (Attempt {retry_attempt + 1})")
        fetched_data = await fetch_data()
        if fetched_data:
            # Save only the first 10 items to the cache
            top_10_data = fetched_data[:10]
            cache.set(CACHE_KEY, top_10_data, timeout=CACHE_TTL)
            print("Data fetched and cached successfully (first 10 items).")
            retry_attempt = 0  # Reset retry attempts after a successful fetch
        else:
            print(f"Failed to fetch data. Retry attempt {retry_attempt + 1}")
            retry_attempt += 1

            # Stop trying after reaching the maximum retries to prevent infinite failures
            if retry_attempt >= MAX_RETRIES:
                print("Max retries reached. Stopping fetch attempts temporarily.")
                retry_attempt = 0  # Reset retry counter
                await asyncio.sleep(RETRY_INTERVAL * 5)  # Wait longer before retrying again

        # Wait for the defined interval before fetching again
        await asyncio.sleep(RETRY_INTERVAL)  # Async sleep to avoid blocking other operations

# Start the background thread for continuous fetching
thread = threading.Thread(target=start_fetching)
thread.daemon = True
thread.start()

@api_view(['GET'])
def get_exoplanet_data(request):
    # Get cached data or return an error if it does not exist
    data = cache.get(CACHE_KEY)
    if data is None:
        return Response({"error": "No data available."}, status=status.HTTP_404_NOT_FOUND)
    return Response(data, status=status.HTTP_200_OK)
