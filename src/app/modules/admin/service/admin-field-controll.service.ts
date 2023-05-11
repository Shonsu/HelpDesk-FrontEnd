import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldBase } from '../common/model/fieldBase';

@Injectable({
    providedIn: 'root'
})
export class AdminFieldControllService {

    constructor() { }

    toFormGroup(fields: FieldBase<string>[]) {
        fields?.sort((a, b) => a.order - b.order);
        const group: any = {};
        fields.forEach(field => {
            group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }
}
