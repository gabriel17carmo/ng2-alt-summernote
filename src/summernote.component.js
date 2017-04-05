/// <reference path="../summernote.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const SUMMERNOTE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(() => SummernoteComponent),
    multi: true
};
let SummernoteComponent = class SummernoteComponent {
    constructor(element) {
        this.element = element;
        this.emptyChange = new core_1.EventEmitter();
        this._disabled = false;
        this.onTouched = () => { };
        this.onChange = () => { };
    }
    set options(options) {
        this._options = options;
        this.addCallbacks();
        this.refreshOptions();
    }
    get options() {
        return this._options || {};
    }
    set disabled(disabled) {
        if (disabled != null) {
            this._disabled = disabled;
            $(this.element.nativeElement).find('.summernote').summernote(disabled ? 'disable' : 'enable');
            this.refreshOptions();
        }
    }
    get disabled() {
        return this._disabled;
    }
    get empty() {
        return this._empty;
    }
    set empty(value) {
        if (this._empty != value) {
            this._empty = value;
            this.emptyChange.emit(value);
        }
    }
    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    refreshOptions() {
        $(this.element.nativeElement).find('.summernote').summernote(this.options);
        if (this.options.tooltip != undefined && !this.options.tooltip)
            $(this.element.nativeElement).find('.note-editor button.note-btn').tooltip('destroy');
    }
    addCallbacks() {
        this.options.callbacks = {
            onChange: (contents, $editable) => {
                this.refreshEmpty();
                this.onChange(contents);
            },
            onBlur: () => {
                this.onTouched();
            }
        };
    }
    refreshEmpty() {
        this.empty = $(this.element.nativeElement).find('.summernote').summernote('isEmpty');
    }
    ngOnInit() {
        if (this.options == null) {
            this.options = {};
        }
        this.refreshEmpty();
    }
    ngOnDestroy() {
        $(this.element.nativeElement).find('.summernote').summernote('destroy');
    }
    writeValue(code) {
        this.value = code;
        $(this.element.nativeElement).find('.summernote').summernote('code', code);
        this.refreshEmpty();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SummernoteComponent.prototype, "options", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SummernoteComponent.prototype, "disabled", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SummernoteComponent.prototype, "emptyChange", void 0);
SummernoteComponent = __decorate([
    core_1.Component({
        selector: 'summernote',
        template: '<div class="summernote"></div>',
        providers: [SUMMERNOTE_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SummernoteComponent);
exports.SummernoteComponent = SummernoteComponent;
//# sourceMappingURL=summernote.component.js.map