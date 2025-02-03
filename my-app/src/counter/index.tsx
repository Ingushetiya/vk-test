import classNames from 'classnames';
import styles from './index.module.css';

type TProps = {
    value: number | string;
    size: 8 | 12 | 16 | 20 | 24;
    variant?: 'primary' | 'secondary';
    isStroke?: boolean;
    isPulse?: boolean;
    className?: string;
};

export const Counter = ({
    value,
    size,
    isStroke = false,
    variant = 'primary',
    isPulse = false,
    className = '',
}: TProps) => {
    const displayValue =
        typeof value === 'number' ? (value > 99 ? '99+' : value) : value.slice(0, 3);

    const isPulseVisible = isPulse && (size === 8 || size === 12);

    return (
        <div
            className={classNames(
                styles.counter,
                styles[`size${size}`],
                styles[`variant-${variant}`],
                {
                    [styles.stroke]: isStroke,
                    [styles.pulse]: isPulseVisible,
                },
                className,
            )}>
            {isPulseVisible && <span className={styles[`pulseEffect-${variant}`]} />}
            {size !== 8 && size !== 12 && displayValue}
        </div>
    );
};
