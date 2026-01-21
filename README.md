# WeatherPositivePsychology
天气积极心理学

A single-page web application that combines real-time weather data with positive psychology principles to deliver uplifting, personalized messages based on current weather conditions.

## 🌐 Live Demo
Visit the live application: [https://secodecn.github.io/WeatherPositivePsychology/](https://secodecn.github.io/WeatherPositivePsychology/)

## Features

- 🌤️ **Real-time Weather Data**: Fetches current weather and temperature via API
- 💭 **Positive Psychology**: Generates unique, uplifting messages on every page load
- 🎨 **Weather-Adaptive UI**: Interface changes colors, icons, and themes based on weather conditions
- 📱 **Responsive Design**: Clean, cartoon-style layout that works on all devices
- 🌈 **Warm & Natural**: Friendly interface with smooth animations and natural color palette

## How to Use

### Using the Live Site
1. Visit [https://secodecn.github.io/WeatherPositivePsychology/](https://secodecn.github.io/WeatherPositivePsychology/)
2. Allow location access when prompted (optional - you can manually enter a city name)
3. View the current weather and receive an uplifting message
4. Refresh the page to get a new positive message

### Running Locally
1. Clone this repository
2. Open `index.html` in a modern web browser
3. Allow location access when prompted (optional - defaults to a sample city)
4. View the current weather and receive an uplifting message

## Weather API

This app uses the OpenWeatherMap API. For production use:
1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the API key in `script.js` with your own key

## Technologies

- HTML5
- CSS3 (with flexbox and animations)
- Vanilla JavaScript (ES6+)
- OpenWeatherMap API

## Design Principles

- Clean, cartoon-style aesthetics
- Warm, natural color palette
- Responsive and accessible
- Positive psychology integration
- Weather-responsive visual feedback

## Deployment

This application is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch will trigger a new deployment.

### Setting up GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The workflow in `.github/workflows/static.yml` will handle the deployment

## License

See LICENSE file for details.
