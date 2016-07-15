import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "sui-modal",
    template: `<div [ngClass]="{'ui dimmer modals page transition': dimmer,'active visible animating in fade': _visibility && dimmer}">
    <div class="ui modal {{_class}} transition {{animation}}" 
        [style.margin-top.px]="marginTop"
        [ngClass]="{'active visible animating in': _visibility, 'active animating out': _closing}"
     #modal>
      <i class="close icon" (click)="closeModal()"></i>
      <div class="header">
        <ng-content select="header"></ng-content>
      </div>
      <div class="content">
        <div class="description">
            <ng-content select="description"></ng-content>
        </div>
      </div>
      <div class="actions">
        <ng-content select="actions"></ng-content>
      </div>
    </div>
</div>`
})
export class SUIModalComponent {
    @ViewChild("modal") modal: ElementRef;
    @Input() animation: string = "scale";
    @Input() dimmer: boolean = true;
    @Input("class") _class = "";
    @Output("close") close: EventEmitter<boolean> = new EventEmitter<boolean>();
    marginTop: string;
    _visibility: boolean = false;
    _closing: boolean = false;

    showModal() {
        if (this._visibility) {
            return;
        }

        setTimeout(() => {
            this.marginTop = "-" + String(this.modal.nativeElement.clientHeight / 2);
        }, 0);

        this._visibility = true;
    }

    closeModal() {
        if (!this._visibility) {
            return;
        }

        this._closing = true;
        
        setTimeout(() => {
            this._visibility = false;
            setTimeout(() => {
                this.modal.nativeElement.classList.remove("active", "animating", "out");
                this._closing = false;
            }, 400);
            this.close.emit(true);
        }, 400);
    }
}