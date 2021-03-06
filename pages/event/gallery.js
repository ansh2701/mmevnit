import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { fetchAPI } from "../../lib/api";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
];

const PhotoGallery = ({ photo }) => {
  const ratio = (a, b) => {
    a = Math.ceil(a / 200);
    b = Math.ceil(b / 200);

    if (a % b === 0) {
      return a / b;
    } else {
      return a;
    }
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const gal = [];
  const filPhoto = photo.map((ph) =>
    ph.pic.map((im) =>
      gal.push({
        src: im.url,
        height: ratio(im.height, im.width),
        width: ratio(im.width, im.height),
      })
    )
  );

  return (
    <div>
      <Gallery photos={gal} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;

export async function getStaticProps() {
  const photo = await fetchAPI(`/gallery`);
  const car = photo.Image.shift();
  if (!photo) {
    return {
      notFound: true,
    };
  }

  return {
    props: { photo: photo.Image }, // will be passed to the page component as props
    revalidate: 60 * 5,
  };
}
