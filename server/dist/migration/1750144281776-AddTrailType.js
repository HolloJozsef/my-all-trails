"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTrailType1750144281776 = void 0;
class AddTrailType1750144281776 {
    constructor() {
        this.name = 'AddTrailType1750144281776';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "trails" ADD "type" character varying NOT NULL DEFAULT 'hiking'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "trails" DROP COLUMN "type"`);
    }
}
exports.AddTrailType1750144281776 = AddTrailType1750144281776;
//# sourceMappingURL=1750144281776-AddTrailType.js.map