document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const resultDiv = document.getElementById('weather-result');
    const errorDiv = document.getElementById('error-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        resultDiv.innerHTML = '';
        errorDiv.textContent = '';

        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        if (new Date(startDate) > new Date(endDate)) {
            errorDiv.textContent = 'Error: Start date cannot be after end date.';
            return;
        }

        try {
            const response = await fetch('/get_weather', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    start_date: startDate,
                    end_date: endDate,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'An unknown error occurred.');
            }

            const data = await response.json();
            displayWeatherData(data);

        } catch (error) {
            errorDiv.textContent = `Error: ${error.message}`;
        }
    });

    function displayWeatherData(data) {
        if (!data.daily || !data.daily.time || data.daily.time.length === 0) {
            resultDiv.innerHTML = '<p>No weather data found for the selected date range.</p>';
            return;
        }

        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Max Temp (°C)</th>
                    <th>Min Temp (°C)</th>
                    <th>Precipitation (mm)</th>
                    <th>Max Wind (km/h)</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;

        const tbody = table.querySelector('tbody');
        const daily = data.daily;

        daily.time.forEach((date, index) => {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${date}</td>
                <td>${daily.temperature_2m_max[index]}</td>
                <td>${daily.temperature_2m_min[index]}</td>
                <td>${daily.precipitation_sum[index]}</td>
                <td>${daily.windspeed_10m_max[index]}</td>
            `;
        });

        resultDiv.appendChild(table);
    }
});
