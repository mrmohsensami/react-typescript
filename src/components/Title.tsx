type TitleProps = {
    children: string;
};

const Title = (props: TitleProps) => {
    return <div>{props.children}</div>;
};

export default Title;
