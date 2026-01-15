// OpenWeatherMap API Configuration
// NOTE: For production, use your own API key from https://openweathermap.org/api
const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // Demo key - replace with your own
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Positive Psychology Messages - categorized by weather condition
const positiveMessages = {
    clear: [
        "What a beautiful day! The sunshine reminds us that light always follows darkness. Embrace today's opportunities! ☀️",
        "Clear skies mirror a clear mind. Today is perfect for setting new intentions and chasing your dreams! 🌟",
        "The sun's warmth is nature's way of giving us a hug. Share that warmth with others today! 🤗",
        "Sunny days are perfect for cultivating gratitude. What are three things you're thankful for? 🙏",
        "Let the sunshine fuel your positivity! Your energy can brighten someone else's day too! ✨",
        "Clear weather, clear possibilities! Today is a blank canvas - paint it with joy! 🎨"
    ],
    clouds: [
        "Clouds remind us that beauty comes in all forms. Your unique qualities make you special! ☁️",
        "Even on cloudy days, the sun is still shining above. Your inner light is always there too! 💫",
        "Cloudy weather is perfect for reflection and creativity. What will you create today? 🎨",
        "Like clouds passing by, challenges are temporary. Your strength is permanent! 💪",
        "Soft clouds, soft thoughts. Be gentle with yourself today - you're doing great! 🌸",
        "Clouds add character to the sky, just like experiences add depth to your story! 📖"
    ],
    rain: [
        "Rain nourishes growth. Let today's challenges help you bloom into your best self! 🌱",
        "The sound of rain is nature's meditation. Take a moment to breathe and center yourself! 🧘",
        "Every raindrop is a fresh start. What new beginning will you embrace today? 💧",
        "Rain washes away the old to make room for the new. What are you ready to let go of? 🌊",
        "Dancing in the rain is a mindset! Find joy in unexpected moments today! 💃",
        "After every rainfall comes growth and renewal. You're evolving beautifully! 🌿"
    ],
    drizzle: [
        "A gentle drizzle reminds us that small, consistent actions create big changes! 💧",
        "Light rain brings gentle blessings. Notice the small joys around you today! ✨",
        "Drizzle is nature's way of being tender. Be kind to yourself today! 💕",
        "Like soft rain, let kindness be your constant companion today! 🌈",
        "Small drops create mighty oceans. Your small efforts matter more than you know! 🌊"
    ],
    thunderstorm: [
        "Storms show us our strength. You've weathered challenges before - you can do it again! ⚡",
        "Thunder reminds us to speak our truth boldly. Your voice matters! 📢",
        "After the storm comes the rainbow. Better days are on the horizon! 🌈",
        "Storms are temporary, but your resilience is forever. You've got this! 💪",
        "Lightning illuminates the sky briefly, but leaves a lasting impression - just like your positive impact! ⚡",
        "Thunderstorms clear the air. Sometimes disruption leads to clarity and growth! 🌩️"
    ],
    snow: [
        "Each snowflake is unique, just like you! Celebrate your individuality today! ❄️",
        "Snow creates a peaceful blanket over the world. Find your inner peace today! 🧘",
        "Winter's beauty reminds us that every season has its purpose. Trust your timing! ⏰",
        "Snow encourages us to slow down and appreciate the moment. Be present today! 🎁",
        "Like fresh snow, today is a clean slate. What wonderful things will you create? ✨",
        "Snowflakes fall gently but together they're powerful. Your contributions matter! 💪"
    ],
    mist: [
        "Mist creates mystery and wonder. Embrace the unknown - adventure awaits! 🌫️",
        "When visibility is low, trust your inner compass. Your intuition is strong! 🧭",
        "Mist reminds us that clarity comes in its own time. Be patient with yourself! ⏳",
        "Foggy weather invites introspection. Listen to your inner wisdom today! 💭",
        "Through the mist, new perspectives emerge. Stay open to possibilities! 🔮"
    ],
    default: [
        "Every type of weather teaches us something valuable. What will today's lesson be? 📚",
        "Your positive energy can brighten any forecast! Share your smile today! 😊",
        "Weather changes, but your capacity for joy remains constant. Choose happiness! 🌟",
        "Like the weather, life is ever-changing. Embrace the flow! 🌊",
        "No matter the weather, your inner sunshine can light up the world! ☀️",
        "Today is a gift - that's why it's called the present! Make it count! 🎁"
    ]
};

// Weather icon mapping
const weatherIcons = {
    clear: '☀️',
    clouds: '☁️',
    rain: '🌧️',
    drizzle: '🌦️',
    thunderstorm: '⛈️',
    snow: '❄️',
    mist: '🌫️',
    fog: '🌫️',
    haze: '🌫️',
    default: '🌤️'
};

// Get user's location and fetch weather
function initApp() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeather(lat, lon);
            },
            error => {
                console.log('Geolocation error:', error);
                // Default to a sample city (Beijing) if geolocation fails
                fetchWeatherByCity('Beijing');
            }
        );
    } else {
        // Fallback to default city
        fetchWeatherByCity('Beijing');
    }
}

// Fetch weather by coordinates
async function fetchWeather(lat, lon) {
    try {
        const url = `${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        // Use demo data as fallback
        console.log('Using demo data as fallback');
        useDemoData();
    }
}

// Fetch weather by city name
async function fetchWeatherByCity(city) {
    try {
        const url = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        // Use demo data as fallback for testing/demo purposes
        console.log('Using demo data as fallback');
        useDemoData();
    }
}

// Demo data fallback for when API is unavailable
function useDemoData() {
    // Randomly select a weather condition for demo
    const conditions = ['clear', 'clouds', 'rain', 'snow'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    
    const demoData = {
        name: 'Demo City',
        sys: { country: 'DEMO' },
        main: {
            temp: Math.floor(Math.random() * 20) + 10, // Random temp 10-30°C
            humidity: Math.floor(Math.random() * 40) + 40 // Random 40-80%
        },
        weather: [{
            main: randomCondition.charAt(0).toUpperCase() + randomCondition.slice(1),
            description: randomCondition + ' sky'
        }],
        wind: {
            speed: Math.random() * 5 + 2 // Random 2-7 m/s
        }
    };
    
    displayWeather(demoData);
}

// Display weather data
function displayWeather(data) {
    // Hide loading, show content
    document.getElementById('loading').style.display = 'none';
    document.getElementById('weatherContent').style.display = 'block';
    
    // Extract weather data
    const location = `${data.name}, ${data.sys.country}`;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
    const weatherCondition = data.weather[0].main.toLowerCase();
    
    // Update DOM elements
    document.getElementById('location').textContent = location;
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('weatherDescription').textContent = description;
    document.getElementById('humidity').textContent = `💧 ${humidity}% Humidity`;
    document.getElementById('wind').textContent = `💨 ${windSpeed} km/h Wind`;
    
    // Set weather icon
    const icon = weatherIcons[weatherCondition] || weatherIcons.default;
    document.getElementById('weatherIcon').textContent = icon;
    
    // Update background based on weather
    updateBackground(weatherCondition);
    
    // Generate and display positive message
    const message = generatePositiveMessage(weatherCondition);
    document.getElementById('positiveMessage').textContent = message;
}

// Update background based on weather condition
function updateBackground(condition) {
    const body = document.body;
    // Remove all weather classes
    body.className = '';
    
    // Add appropriate class
    if (weatherIcons[condition]) {
        body.classList.add(condition);
    }
}

// Generate a random positive message based on weather
function generatePositiveMessage(condition) {
    // Get messages for the specific condition or use default
    const messages = positiveMessages[condition] || positiveMessages.default;
    
    // Select a random message
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Show error message
function showError(message) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('errorText').textContent = message;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
