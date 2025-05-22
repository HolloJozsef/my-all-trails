"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const app_module_1 = require("../app.module");
const trail_entity_1 = require("../trail.entity");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    try {
        const trailRepo = app.get((0, typeorm_1.getRepositoryToken)(trail_entity_1.Trail));
        await trailRepo.insert([
            {
                name: 'Sunny Peak Trail',
                description: 'A beautiful sunny trail.',
                directions: 'Start at the parking lot, head north.',
                lat: 39.7392,
                lon: -104.9903,
                length: '5.5 mi',
                difficulty: 'Moderate',
                rating: 4.7,
                estimatedTime: '2h 30m',
                location: 'Colorado',
                imageUrl: 'https://example.com/image1.jpg',
            },
            {
                name: 'Mountain Ridge Trail',
                description: 'A challenging trail with breathtaking views.',
                directions: 'Follow the ridge to the summit.',
                lat: 38.8837,
                lon: -106.0589,
                length: '7.0 mi',
                difficulty: 'Hard',
                rating: 4.9,
                estimatedTime: '3h 45m',
                location: 'Colorado',
                imageUrl: 'https://example.com/image2.jpg',
            },
            {
                name: 'River Bend Trail',
                description: 'A scenic trail along the river.',
                directions: 'Walk along the riverbank towards the forest.',
                lat: 38.7195,
                lon: -105.0001,
                length: '4.0 mi',
                difficulty: 'Easy',
                rating: 4.3,
                estimatedTime: '1h 30m',
                location: 'Colorado',
                imageUrl: 'https://example.com/image3.jpg',
            },
            {
                name: 'Lakeside Trail',
                description: 'A relaxing trail by the lake.',
                directions: 'Circle around the lake and enjoy the scenery.',
                lat: 37.7749,
                lon: -122.4194,
                length: '3.2 mi',
                difficulty: 'Easy',
                rating: 4.5,
                estimatedTime: '1h 45m',
                location: 'California',
                imageUrl: 'https://example.com/image4.jpg',
            },
            {
                name: 'Desert Dunes Trail',
                description: 'A trail through the desert dunes.',
                directions: 'Head east towards the sand dunes.',
                lat: 35.3584,
                lon: -118.6682,
                length: '6.0 mi',
                difficulty: 'Moderate',
                rating: 4.2,
                estimatedTime: '2h 30m',
                location: 'California',
                imageUrl: 'https://example.com/image5.jpg',
            },
            {
                name: 'Forest Path Trail',
                description: 'A peaceful walk through the forest.',
                directions: 'Follow the path through the dense woods.',
                lat: 41.8781,
                lon: -87.6298,
                length: '2.5 mi',
                difficulty: 'Easy',
                rating: 4.6,
                estimatedTime: '1h 15m',
                location: 'Illinois',
                imageUrl: 'https://example.com/image6.jpg',
            },
            {
                name: 'Rocky Summit Trail',
                description: 'A rugged trail up to the summit.',
                directions: 'Climb the steep rocks to the top.',
                lat: 39.5501,
                lon: -105.7821,
                length: '8.0 mi',
                difficulty: 'Hard',
                rating: 4.8,
                estimatedTime: '4h',
                location: 'Colorado',
                imageUrl: 'https://example.com/image7.jpg',
            },
            {
                name: 'Hilltop View Trail',
                description: 'A trail with a spectacular view from the hilltop.',
                directions: 'Walk up the hill to the viewpoint.',
                lat: 36.7783,
                lon: -119.4179,
                length: '4.5 mi',
                difficulty: 'Moderate',
                rating: 4.4,
                estimatedTime: '2h',
                location: 'California',
                imageUrl: 'https://example.com/image8.jpg',
            },
            {
                name: 'Canyon Walk Trail',
                description: 'A trail through a beautiful canyon.',
                directions: 'Walk along the canyon floor.',
                lat: 36.1069,
                lon: -112.1129,
                length: '6.5 mi',
                difficulty: 'Moderate',
                rating: 4.7,
                estimatedTime: '3h',
                location: 'Arizona',
                imageUrl: 'https://example.com/image9.jpg',
            },
            {
                name: 'Pinewood Trail',
                description: 'A peaceful walk through pine forests.',
                directions: 'Follow the winding path through the pines.',
                lat: 40.7128,
                lon: -74.006,
                length: '3.0 mi',
                difficulty: 'Easy',
                rating: 4.3,
                estimatedTime: '1h 30m',
                location: 'New York',
                imageUrl: 'https://example.com/image10.jpg',
            },
        ]);
        console.log('Seeded 10 trails ✅');
    }
    catch (error) {
        console.error('Error during seeding:', error);
    }
    finally {
        await app.close();
    }
}
bootstrap();
//# sourceMappingURL=seed.js.map