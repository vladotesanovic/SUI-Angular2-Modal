import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "sui-modal",
    template: `<div (click)="closeModal()" class="ui dimmer modals page transition" [ngClass]="{'active visible animating in fade': _visibility }">
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
    @Input() animation = "scale";
    @Input("class") _class = "";
    @Output("close") close: EventEmitter<boolean> = new EventEmitter<boolean>();
    marginTop: string;
    _visibility: boolean = false;
    _closing: boolean = false;

    showModal() {
        setTimeout(() => {
            this.marginTop = "-" + String(this.modal.nativeElement.clientHeight / 2);
        }, 0);

        this._visibility = true;
    }

    closeModal() {
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