import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'objNgFor'
})

export class ObjNgFor implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        //return Object.keys(value).map((key)=> Object.assign({ key }, value[key));

        if (!value) {
            return value;
        } 
    
        let keys = [];
        for (let key in value) {
        keys.push({key: key, value: value[key]});
        } 
        return keys;
        
    }
}