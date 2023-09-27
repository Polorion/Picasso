import React from 'react';
import {FixedSizeList} from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";
import {Item} from "./item/Item";

const ListComponent = ({items, loadMore, hasNextPage}) => {
    const Row = ({index, style}) => {
        return (
            <div style={style}>
                <Item data={items[index]} key={items[index].id}/>
            </div>)

    };

    const itemCount = hasNextPage ? items.length + 1 : items.length;
    const height = window.innerHeight
    return (
        <InfiniteLoader
            isItemLoaded={index => index < items.length}
            itemCount={itemCount}
            loadMoreItems={loadMore}
        >
            {({onItemsRendered, ref}) => (
                <FixedSizeList
                    height={height - 10}
                    width={500}
                    itemCount={itemCount}
                    itemSize={120}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                >
                    {Row}
                </FixedSizeList>
            )}
        </InfiniteLoader>
    )
};

export default ListComponent;