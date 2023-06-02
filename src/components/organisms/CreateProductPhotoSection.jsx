import ImageUploading from "react-images-uploading";
import PhotoPlaceholder from "../atoms/PhotoPlaceholder";
import styled from "styled-components";

const CreateProductInputPhotos = ({
  images,
  handlePhoto,
  inspoGraphics,
  title,
}) => {
  const maxNumber = 5;

  return (
    <>
      <div>
        <SectionTitle>Photos</SectionTitle>
        <p>Add as many as you can so buyers can see every detail.</p>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ width: "25%" }}>
          <h4>Photos*</h4>
          <p>
            Use up to ten photos to show your item's most important qualities.
          </p>
          <p>Tips</p>
          <ul>
            <li>Use natural light and no flash.</li>
            <li>Include a common object for scale.</li>
            <li>Show the item being held, wor, or used.</li>
            <li>Shoot against a clean, simple background.</li>
            <li>
              Add photos to your variations so buyers can see all their options
            </li>
          </ul>
        </div>
        <PhotosContainer>
          <ImageUploading
            multiple
            value={images}
            onChange={handlePhoto}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
              <>
                {imageList.map((image, index) => (
                  <div key={index}>
                    <img src={image["data_url"]} alt={title} width="144" />
                    <div>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <AddPhotoButton
                  width={"9rem"}
                  height={"9rem"}
                  borderRadius={".5rem"}
                  styles={{
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  addClick={onImageUpload}
                  {...dragProps}
                >
                  <div style={{ fontSize: "3rem", textAlign: "center" }}>+</div>
                </AddPhotoButton>
              </>
            )}
          </ImageUploading>
          {inspoGraphics &&
            inspoGraphics.map((_, i) => (
              <PhotoPlaceholder
                width={"9rem"}
                height={"9rem"}
                borderRadius={".5rem"}
                styles={{ fontSize: "1rem" }}
                key={i + 8}
              >
                InspoGraphic
              </PhotoPlaceholder>
            ))}
        </PhotosContainer>
      </div>
    </>
  );
};
export default CreateProductInputPhotos;
const PhotosContainer = styled.div`
  display: flex;
  padding: 1rem 0 0 2rem;
  gap: 1.25rem;
  flex-wrap: wrap;
`;
const SectionTitle = styled.h2`
  font-weight: 300;
`;
const AddPhotoButton = styled(PhotoPlaceholder)``;
