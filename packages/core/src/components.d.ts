/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LegodsButton {
        "disabled": boolean;
        "flat": boolean;
        "full": boolean;
        "styles": any;
        "variant": string;
    }
}
declare global {
    interface HTMLLegodsButtonElement extends Components.LegodsButton, HTMLStencilElement {
    }
    var HTMLLegodsButtonElement: {
        prototype: HTMLLegodsButtonElement;
        new (): HTMLLegodsButtonElement;
    };
    interface HTMLElementTagNameMap {
        "legods-button": HTMLLegodsButtonElement;
    }
}
declare namespace LocalJSX {
    interface LegodsButton {
        "disabled"?: boolean;
        "flat"?: boolean;
        "full"?: boolean;
        "onButtonClick"?: (event: CustomEvent<any>) => void;
        "styles"?: any;
        "variant"?: string;
    }
    interface IntrinsicElements {
        "legods-button": LegodsButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "legods-button": LocalJSX.LegodsButton & JSXBase.HTMLAttributes<HTMLLegodsButtonElement>;
        }
    }
}
