import { ElementRef, EventEmitter } from "@angular/core";
export declare class SUIModalComponent {
    modal: ElementRef;
    animation: string;
    _class: string;
    dimmer: boolean;
    close: EventEmitter<boolean>;
    marginTop: string;
    _visibility: boolean;
    _closing: boolean;
    visibility: boolean;
    closeModal(): void;
}
