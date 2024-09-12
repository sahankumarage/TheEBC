import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//import Image1 from '../../assets/Images/Photo/JWP07145.jpg'
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
import Image15 from '../../assets/Images/Photo/PXL_20240821_101810423.MP.jpg'
import Image16 from '../../assets/Images/Photo/PXL_20240821_101813170~2.jpg'
import Image17 from '../../assets/Images/PXL_20240823_095510242.jpg'
import Image18 from '../../assets/Images/Photo/PXL_20240828_114406207.jpg'
import Image19 from '../../assets/Images/Photo/PXL_20240830_115245290.MP.jpg'
import Image20 from '../../assets/Images/Photo/PXL_20240830_115304520.MP.jpg'

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
  { img: Image1, title: 'Image 1' },
  { img: Image2, title: 'Image 2' },
  { img: Image4, title: 'Image 4' },
  { img: Image5, title: 'Image 5' },
  { img: Image6, title: 'Image 6' },
  { img: Image7, title: 'Image 7' },
  { img: Image8, title: 'Image 8' },
  { img: Image9, title: 'Image 9' },
  { img: Image10, title: 'Image 10' },
  { img: Image11, title: 'Image 11' },
  { img: Image12, title: 'Image 12' },
  { img: Image13, title: 'Image 13' },
  { img: Image14, title: 'Image 14' },
  { img: Image15, title: 'Image 15' },
  { img: Image16, title: 'Image 16' },
  { img: Image17, title: 'Image 17' },
  { img: Image18, title: 'Image 18' },
  { img: Image19, title: 'Image 19' },
  { img: Image20, title: 'Image 20' },
];
