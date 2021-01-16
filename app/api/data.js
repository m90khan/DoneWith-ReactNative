import { useEffect, useState } from 'react';

const listingsData = [
  {
    id: 1,
    title: 'Red jacket for sale',
    images: [
      {
        url: require('../assets/jacket.jpg'),
        thumbnailUrl: require('../assets/jacket.jpg'),
      },
    ],
    price: 100,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 40.814725,
      longitude: -74.199311,
    },
  },
  {
    id: 2,
    title: 'Couch in great condition',
    images: [
      {
        url: require('../assets/couch.jpg'),
        thumbnailUrl: require('../assets/couch.jpg'),
      },
    ],
    price: 200,
    categoryId: 2,
    userId: 3,
    location: {
      latitude: 40.8359,
      longitude: -74.164623,
    },
  },
  {
    id: 3,
    title: 'Bed in great condition',
    images: [
      {
        url: require('../assets/couch.jpg'),
        thumbnailUrl: require('../assets/couch.jpg'),
      },
    ],
    price: 300,
    categoryId: 4,
    userId: 2,
    location: {
      latitude: 40.456732,
      longitude: -79.944067,
    },
  },
  {
    id: 4,
    title: 'Car in great condition',
    images: [
      {
        url: require('../assets/jacket.jpg'),
        thumbnailUrl: require('../assets/jacket.jpg'),
      },
    ],
    price: 500,
    categoryId: 3,
    userId: 2,
    location: {
      latitude: 41.495101,
      longitude: -81.627575,
    },
  },
];

const useListings = () => {
  const [listings, setListings] = useState(listingsData);

  return { listings, setListings };
};

export default useListings;
