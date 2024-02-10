import React, { useState } from "react";
import classes from "./CopyrightContent.module.scss";
import { getImage } from "../../helpers/getImage";
import { autorsRightImgs } from "../../helpers/constants";
import { CopyrightListItem } from "./CopyrightListItem";

export const CopyrightContent: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const getAllImages = async () => {
    const result = [];
    for (let i = 0; i <= 17; i++) {
      const img = await getImage(i);
      result.push(img);
    }
    return result;
  };

  const loadImagesHandler = () => {
    async function fetchImages() {
      const loadedImages = await getAllImages();
      setImages(loadedImages);
    }

    fetchImages();
  };

  return (
    <div className={classes.content}>
      <p className={classes.text}>
        Some of the images featured on this website have been carefully selected
        from Pinterest to complement the content. These images have been used to
        enhance the visual experience of our visitors. Below, you can find
        samples of these images along with links to their original sources on
        Pinterest. I am grateful to the creators and contributors on Pinterest
        for their inspiring and creative work, which has significantly
        contributed to the aesthetics of my site.
      </p>
      <p className={classes.text}>
        Images from my website that cannot be found in the list below have been
        created by AI. Due to EU law, they can be used for non-commercial
        purposes. As my site is not a commercial project but rather a portfolio
        work, the use of these images does not violate copyright.
      </p>

      {images.length === 0 ? (
        <button className={classes.btn} onClick={loadImagesHandler}>
          View images with source
        </button>
      ) : (
        <ul className={classes.list}>
          {autorsRightImgs.map((obj) => {
            return (
              <CopyrightListItem
                key={obj.id}
                src={obj.src}
                img={images[obj.id]}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
