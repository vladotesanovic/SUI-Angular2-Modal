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
var core_1 = require("@angular/core");
var SUIModalComponent = (function () {
    function SUIModalComponent() {
        this.animation = "scale";
        this._class = "";
        this.close = new core_1.EventEmitter();
        this._visibility = false;
        this._closing = false;
    }
    SUIModalComponent.prototype.showModal = function () {
        var _this = this;
        setTimeout(function () {
            _this.marginTop = "-" + String(_this.modal.nativeElement.clientHeight / 2);
        }, 0);
        this._visibility = true;
    };
    SUIModalComponent.prototype.closeModal = function () {
        var _this = this;
        this._closing = true;
        setTimeout(function () {
            _this._visibility = false;
            setTimeout(function () {
                _this.modal.nativeElement.classList.remove("active", "animating", "out");
                _this._closing = false;
            }, 400);
            _this.close.emit(true);
        }, 400);
    };
    __decorate([
        core_1.ViewChild("modal"), 
        __metadata('design:type', core_1.ElementRef)
    ], SUIModalComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SUIModalComponent.prototype, "animation", void 0);
    __decorate([
        core_1.Input("class"), 
        __metadata('design:type', Object)
    ], SUIModalComponent.prototype, "_class", void 0);
    __decorate([
        core_1.Output("close"), 
        __metadata('design:type', core_1.EventEmitter)
    ], SUIModalComponent.prototype, "close", void 0);
    SUIModalComponent = __decorate([
        core_1.Component({
            selector: "sui-modal",
            template: "<div (click)=\"closeModal()\" class=\"ui dimmer modals page transition\" [ngClass]=\"{'active visible animating in fade': _visibility }\">\n    <div class=\"ui modal {{_class}} transition {{animation}}\" \n        [style.margin-top.px]=\"marginTop\"\n        [ngClass]=\"{'active visible animating in': _visibility, 'active animating out': _closing}\"\n     #modal>\n      <i class=\"close icon\" (click)=\"closeModal()\"></i>\n      <div class=\"header\">\n        <ng-content select=\"header\"></ng-content>\n      </div>\n      <div class=\"content\">\n        <div class=\"description\">\n            <ng-content select=\"description\"></ng-content>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <ng-content select=\"actions\"></ng-content>\n      </div>\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SUIModalComponent);
    return SUIModalComponent;
}());
exports.SUIModalComponent = SUIModalComponent;
//# sourceMappingURL=modal.js.map