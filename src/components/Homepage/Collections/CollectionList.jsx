import { CollectionListData } from '../../../views/CollectionListData';

const CollectionList = () => {
  const collections = CollectionListData();

  return (
    <div className='collection-wrapper'>
      {collections.map((collection) => (
        <div className='collection-item' key={collection.id}>
          <img src={collection.collectionImg} alt='' />
          <div className='collection-image-caption'>
            <h2>{collection.collectionTitle}</h2>
            <p>{collection.amountItem} Items</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
