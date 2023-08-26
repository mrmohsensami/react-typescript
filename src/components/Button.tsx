type buttonProps = {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
    title?: string;
};

const Button = ({ clickHandler, title = 'Click Me' }: buttonProps) => {
    return <button onClick={(e) => clickHandler(e, 12)}>{title}</button>;
};

export default Button;
