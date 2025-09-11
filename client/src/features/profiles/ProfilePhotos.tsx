import { useParams } from "react-router";
import { useProfile } from "../../lib/hooks/useProfile";
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import PhotoUploadWidget from "../../app/shared/components/PhotoUploadWidget";
import { useState } from "react";

export default function ProfilePhotos() {
  const { id } = useParams();
  const { photos, loadingPhotos, isCurrentUser } = useProfile(id);
  const [editMode, setEditMode] = useState(false);

  if (loadingPhotos) {
    return <Typography> Loading photos...</Typography>;
  }

  if (!photos || photos.length === 0) {
    return <Typography> Photos not found...</Typography>;
  }

  return (
    <Box>
      {isCurrentUser && (
        <Box>
          <Button onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Add photo"}
          </Button>
        </Box>
      )}
      {editMode ? (
         <PhotoUploadWidget /> 
      ) : (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {photos.map((item) => (
            <ImageListItem key={item.id}>
              <img
                srcSet={`${item.url.replace(
                  "/upload",
                  "/upload/w_164,h_164,c_fill,f_auto,dpr_2,g_face"
                )}`}
                src={`${item.url.replace(
                  "/upload",
                  "/upload/w_164,h_164,c_fill,f_auto,g_face"
                )}`}
                alt={"USer profile image"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}
