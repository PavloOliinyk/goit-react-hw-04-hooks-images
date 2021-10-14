import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Modal from './Modal';
import ImageApi from './api/imageApi';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const image = new ImageApi();

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalImages, setTotalImages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchImages() {
      try {
        setShowLoader(true);
        const { hits, totalHits } = await image.fetchImageOrPhoto(
          query,
          currentPage,
        );

        if (!hits.length) {
          toast.error('Enter proper query', { theme: 'colored' });
        }

        setImages(images => {
          return [...images, ...hits];
        });
        setTotalImages(totalHits);
      } catch (error) {
        toast.error(error.message, { theme: 'colored' });
      } finally {
        setShowLoader(false);
      }
    }

    fetchImages();
  }, [currentPage, query]);

  useEffect(() => {
    if (images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [images.length]);

  const modalToggle = index => {
    setShowModal(!showModal);
    setActiveImageIndex(index);
  };

  const handleSumbit = value => {
    if (value === '') {
      toast.error('No query entered yet...', { theme: 'colored' });
      return;
    }

    setQuery(value);
    setImages([]);
    setCurrentPage(1);
  };

  const loadMoreImages = () => {
    if (images.length === totalImages) {
      toast.error('There is no more images to show', { theme: 'colored' });
      return;
    }

    setCurrentPage(currentPage => currentPage + 1);
  };

  return (
    <>
      <div className="App">
        <Searchbar onSubmit={handleSumbit} />

        {images.length > 1 && (
          <>
            <ImageGallery images={images} onModalClick={modalToggle} />
            {!showLoader && <Button onSearch={loadMoreImages} />}
          </>
        )}

        {showLoader && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
            style={{ textAlign: 'center' }}
          />
        )}

        {showModal && (
          <Modal
            currentImage={images[activeImageIndex]}
            onModalClick={modalToggle}
          />
        )}
      </div>

      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
