import { ElementRef, EventEmitter } from "@angular/core";
export declare class SUIModalComponent {
    modal: ElementRef;
    animation: string;
    dimmer: boolean;
    _class: string;
    close: EventEmitter<boolean>;
    marginTop: string;
    _visibility: boolean;
    _closing: boolean;
    showModal(): void;
    closeModal(): void;
}
