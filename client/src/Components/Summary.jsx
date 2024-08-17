import { useEffect } from "react";
import { setContexts } from "../Context.jsx";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from './CarouselImage';

export default function Summary() {
  const {
    displayTags,
    setDisplayTags,
    selectedPreview,
    setSelectedPreview,
    showPreview,
    setShowPreview,
    previewNavSlider,
    setpreviewNavSlider,
  } = setContexts();

  useEffect(() => {
    setShowPreview(true);
  }, [showPreview]);

  const toggleTagsModal = () => {
    setDisplayTags(!displayTags);
  };

  const switchPreview = (previewIndex) => {
    if (previewIndex > 22) previewIndex = 0;
    if (previewIndex < 0) previewIndex = 22;

    setSelectedPreview(previewIndex);
    setShowPreview(false);

    if (previewIndex * 120 < (previewNavSlider * 2762) / 522) {
      setpreviewNavSlider((previewIndex * 120 * 522) / 2762);
    }

    if (previewIndex * 120 > (previewNavSlider * 2762) / 522 + 480) {
      if (previewIndex * 120 > 2402) {
        setpreviewNavSlider((2160 * 522) / 2762);
      } else {
        setpreviewNavSlider((previewIndex * 120 * 522) / 2762);
      }
    }
  };

  const moveSlider = (e) => {
    const handleMouseMove = (event) => {
      let shift = 0;
      if (event.target.className === "handle") {
        shift = event.target.parentNode.offsetLeft - 30;
        if (shift < 0) shift = 0;
        if (shift > 462) shift = 462;
      } else {
        shift = event.offsetX - 30;
        if (shift < 0) shift = 0;
        if (shift > 462) shift = 462;
      }
      setpreviewNavSlider(shift);
    };

    const handleMouseUp = () => {
      removeEventListener("mousemove", handleMouseMove);
      removeEventListener("mouseup", handleMouseUp);
    };

    addEventListener("mousemove", handleMouseMove);
    addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      {/* Title Area */}
      <div className="page_title_area game_title_area page_content">
        <div className="apphub_HomeHeaderContent">
          <div className="apphub_HeaderStandardTop">
            <div className="apphub_AppName" id="appHubAppName">
            FEATURED & RECOMMENDED
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        </div>
      </div>

      {/* Summary Area dos jogos */}
      <div className="block game_media_and_summary_ctn">
        <div className="block_content page_content" id="game_highlights">
          <Carousel fade>
            <Carousel.Item>
              <div className="carousel-item-content">
                <CarouselImage imgSrc="https://i0.wp.com/www.portaldonerd.com.br/wp-content/uploads/2018/11/red-dead-redemption-2-hero-banner-03-ps4-us-07jun18.jpg" altText="Red Dead Redemption 2" />
                <div className="carousel-card">
                  <h3>Red Dead Redemption 2</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-content">
                <CarouselImage imgSrc="https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_2560x1440_Landscaped%20Store-2560x1440-79155f950f32c9790073feaccae570fb.jpg" altText="GTA V" />
                <div className="carousel-card">
                  <h3>Grand Theft Auto V</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-content">
                <CarouselImage imgSrc="https://assets.nuuvem.com/image/upload/v1/products/618418052f91a002e3f9cf6b/sharing_images/dl3d5ccidn9wlkemhfjr.jpg" altText="Elden Ring" />
                <div className="carousel-card">
                  <h3>Elden Ring</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-content">
                <CarouselImage imgSrc="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_616x353.jpg" altText="Baldur's Gate" />
                <div className="carousel-card">
                  <h3>Baldur's Gate</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
