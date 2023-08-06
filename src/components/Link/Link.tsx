import { forwardRef } from 'react';
import {
    Link as FluentLink,
    type LinkProps as FluentLinkProps
} from '@fluentui/react-components';
import classnames from 'classnames';

export type LinkProps = FluentLinkProps & {
    className?: string;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
    className,
    ...props
}, ref) => {
    return (
        <FluentLink
            ref={ref}
            className={classnames('ui-Link', className)}
            {...props}
        />
    );
});

export default Link;