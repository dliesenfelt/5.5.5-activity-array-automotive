import Vehicle from './vehicleBaseClass.js'


class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0; 
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if(num + this.passenger <= this.maximumPassengers){
            availableRoom === true
        }
    }
    start(){
        if(this.fuel > 0){
            return true
        }
    }
    scheduleService(mileage){
        if(mileage > 3000){
            console.log('Time for maintenance!')
            timeForMaintenance === true
        }
    }
}