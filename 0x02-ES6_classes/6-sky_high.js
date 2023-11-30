import Building from './5-building';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        this._sqrt = sqft;
        this._floors = floors;
    }
}