import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image1 from '../../assets/Images/Photo/JWP07145.jpg'
import Image2 from '../../assets/Images/Photo/JWP07222.jpg'
import Image4 from '../../assets/Images/Photo/JWP07354.jpg'
import Image5 from '../../assets/Images/Photo/JWP07386.jpg'
import Image6 from '../../assets/Images/Photo/JWP07474.jpg'
import Image7 from '../../assets/Images/Photo/JWP07524.jpg'
import Image8 from '../../assets/Images/Photo/JWP07705.jpg'
import Image9 from '../../assets/Images/Photo/JWP07874.jpg'
import Image10 from '../../assets/Images/Photo/PXL_20240816_090150663.jpg'
import Image11 from '../../assets/Images/Photo/PXL_20240820_101255767.jpg'
import Image12 from '../../assets/Images/Photo/PXL_20240820_101309285.MP.jpg'
import Image13 from '../../assets/Images/Photo/PXL_20240820_101300049.jpg'
import Image14 from '../../assets/Images/Photo/PXL_20240820_113032484.MP.jpg'
import Image15 from '../../assets/Images/Photo/PXL_20240820_101255767.jpg'

export default function MasonryImageList() {
  return (
    <Box sx={{ width: "100%", height: "100%", }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];