# Plan: Historical Weather Data Explorer

This plan outlines the steps to create a simple web application using Python and Flask to explore historical weather data for Vancouver, BC, from the Open-Meteo API.

## 1. Project Setup

- [ ] Create a new directory named `historical_weather_explorer`.
- [ ] Inside `historical_weather_explorer`, create the following files:
    - `app.py` (Flask backend)
    - `requirements.txt` (Python dependencies)
    - `templates/index.html` (Frontend HTML)
    - `static/style.css` (Frontend CSS)
    - `static/script.js` (Frontend JavaScript)

## 2. Backend Development (app.py)

- [ ] **Import necessary libraries:** Flask, requests, datetime.
- [ ] **Initialize Flask App:** Create a Flask app instance.
- [ ] **Create Main Route (`/`):**
    - This route will render the main `index.html` page.
- [ ] **Create API Route (`/get_weather`):**
    - This route will accept `start_date` and `end_date` as query parameters.
    - **Construct API URL:** Build the URL for the Open-Meteo API using the provided dates and the hardcoded coordinates for Vancouver, BC.
        - Latitude: `49.2827`
        - Longitude: `-123.1207`
        - Hourly data: `temperature_2m`, `relative_humidity_2m`, `precipitation`, `wind_speed_10m`
    - **Fetch Data:** Make a `GET` request to the Open-Meteo API.
    - **Error Handling:** Check for errors in the API response.
    - **Process Data:** Transform the API response from separate lists of timestamps and values into a single list of hourly data objects (e.g., `[{ "time": "...", "temperature": "..." }, ...]`). This will simplify the frontend logic.
    - **Return Data:** Return the processed weather data as a JSON response to the frontend.

## 3. Frontend Development

### `templates/index.html`
- [ ] **Basic HTML Structure:** Set up the HTML document with a title and include a charting library (e.g., Chart.js).
- [ ] **Link CSS and JS:** Link to `style.css` and `script.js`.
- [ ] **Create Input Form:**
    - Add two date input fields for "Start Date" and "End Date".
    - Add a "Get Weather" button.
- [ ] **Add Precipitation Filter:**
    - Add a number input field to set a minimum precipitation amount.
- [ ] **Create Results Area:**
    - Add a container for a data table.
    - Add a `<canvas>` element for the chart.

### `static/script.js`
- [ ] **Add Event Listener:** Attach a `click` event listener to the "Get Weather" button.
- [ ] **Implement Input Validation:**
    - Before fetching, check that the "End Date" is not earlier than the "Start Date".
- [ ] **Set Default Dates:**
    - On page load, populate the date fields with a default range (e.g., the last 7 days).
- [ ] **Fetch Data from Backend:**
    - When the button is clicked, get the `start_date` and `end_date` values from the input fields.
    - Make a `fetch` request to the `/get_weather` endpoint on the Flask backend.
- [ ] **Client-Side Filtering:**
    - Get the minimum precipitation value from the filter input.
    - Filter the data based on the precipitation value.
- [ ] **Display Data:**
    - Populate an HTML table with the filtered weather data.
- [ ] **Render Chart:**
    - Use the filtered data to render a line chart (e.g., Temperature vs. Time) using the chosen charting library.
- [ ] **Add Loading/Error States:**
    - Display a "Loading..." message while the data is being fetched.
    - Display an error message if the fetch fails.

### `static/style.css`
- [ ] **Basic Styling:** Add some simple CSS to make the application look clean and presentable.
    - Style the form, button, and results table.
    - Ensure the chart is responsive.
    - Use a clear and readable font.

## 4. Dependencies and Running

### `requirements.txt`
- [ ] Add `Flask` and `requests` to the file.

### Running the Application
- [ ] **Instructions:** Add a section to the README on how to run the app.
    - `pip install -r requirements.txt`
    - `flask run`
