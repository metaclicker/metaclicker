interface Stylesheet {
    [className: string]: string;
}

declare function require(name: string): Stylesheet;