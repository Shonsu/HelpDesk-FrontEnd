import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../../common/model/fieldBase';

@Component({
    selector: 'app-admin-dynamic-form-field',
    templateUrl: './admin-dynamic-form-field.component.html',
    styleUrls: ['./admin-dynamic-form-field.component.scss']
})
export class AdminDynamicFormFieldComponent {

    @Input() field!: FieldBase<string>;
    @Input() form!: FormGroup;
    get isValid() {
        return this.form.controls[this.field.key].valid;
    }
}
