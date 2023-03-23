import { FieldBase } from "./fieldBase";

export class TextboxField extends FieldBase<string>{
    override controlType = 'TEXTBOX';
}