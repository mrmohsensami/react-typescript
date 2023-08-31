import React from 'react';

type ListProps<T> = {
    items: T[];
    handler: (value: T) => void;
};
function List<T extends number | string>({ items, handler }: ListProps<T>) {
    return (
        <ul>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <p>{item}</p>
                    <button onClick={() => handler(item)}>Click Me</button>
                </React.Fragment>
            ))}
        </ul>
    );
}

export default List;
