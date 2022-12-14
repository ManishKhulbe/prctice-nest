import { PowerService } from './../power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiskService {
    constructor(private PowerService : PowerService){

    }
getData(){

    this.PowerService.supplyPower(20)
    return "data"
}
}
