type statusProps = {
    status: 'loading' | 'failed' | 'success';
};

const Status = ({ status }: statusProps) => {
    let message;
    if (status === 'loading') {
        message = 'Loading...';
    } else if (status === 'failed') {
        message = 'Error';
    } else if (status === 'success') {
        message = 'Success';
    }
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default Status;
