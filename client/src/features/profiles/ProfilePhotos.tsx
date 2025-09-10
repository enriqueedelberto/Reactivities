import { useParams } from 'react-router'
import { useProfile } from '../../lib/hooks/useProfile';
import { ImageList, ImageListItem, Typography } from '@mui/material';

export default function ProfilePhotos() {
    const {id} = useParams();
     const {photos, loadingPhotos} = useProfile(id);

     if (loadingPhotos) {
    return <Typography> Loading photos...</Typography>;
  }

  if (!photos || photos.length === 0) {
    return <Typography> Photos not found...</Typography>;
  }

  return (
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {photos.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
            alt={ 'USer profile image'}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
