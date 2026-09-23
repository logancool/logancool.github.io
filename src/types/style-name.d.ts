import 'react';
import 'react-router-dom';

declare module 'react' {
    interface DOMAttributes<T> {
        styleName?: string;
    }

    interface HTMLAttributes<T> {
        styleName?: string;
    }

    interface AnchorHTMLAttributes<T> {
        styleName?: string;
    }

    interface ImgHTMLAttributes<T> {
        styleName?: string;
    }
}

declare module 'react-router-dom' {
    interface LinkProps {
        styleName?: string;
    }
}
