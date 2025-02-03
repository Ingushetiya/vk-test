import React, { MouseEvent, ComponentProps, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './index.module.css';

type TProps = {
    label: string;
    rightIcon?: ReactNode;
    variant?: 'primary' | 'secondary';
    isDisabled?: boolean;
    isLoading?: boolean;
    isPressed?: boolean;
    isFocused?: boolean;
    size?: '28' | '36' | '56';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & Pick<ComponentProps<'button'>, 'onClick'>;

export const Button = ({
    label,
    rightIcon,
    variant = 'primary',
    isDisabled,
    isLoading,
    isPressed,
    isFocused,
    size = '28',
    onClick,
    ...props
}: TProps) => {
    return (
        <button
            className={classNames(styles.button, styles[variant], styles[`size${size}`], {
                [styles.disabled]: isDisabled,
                [styles.pressed]: isPressed,
                [styles.focused]: isFocused,
            })}
            disabled={isDisabled || isLoading}
            onClick={onClick}
            {...props}>
            {isLoading ? <span className={styles.loader}></span> : label}
            {rightIcon && !isLoading && rightIcon}
        </button>
    );
};
