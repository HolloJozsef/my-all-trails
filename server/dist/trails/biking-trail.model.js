"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikingTrail = void 0;
const trail_type_enum_1 = require("./trail-type.enum");
class BikingTrail {
    constructor(data) {
        this.type = trail_type_enum_1.TrailType.BIKING;
        this.name = data.name;
        this.description = data.description;
        this.difficulty = data.difficulty;
        this.length = data.length;
        this.location = data.location;
    }
    getSafetyWarning() {
        return 'Cyclists must wear a helmet and yield to pedestrians.';
    }
    getGearRecommendation() {
        return 'Recommended gear: Helmet, tire repair kit, and gloves.';
    }
}
exports.BikingTrail = BikingTrail;
//# sourceMappingURL=biking-trail.model.js.map