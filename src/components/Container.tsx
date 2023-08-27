type ContainerProps = {
    styles: React.CSSProperties;
};

const Container = ({ styles }: ContainerProps) => {
    return <div style={styles}>Hello World</div>;
};

export default Container;
