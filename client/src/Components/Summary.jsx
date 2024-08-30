import { useEffect } from "react";
import { setContexts } from "../Context.jsx";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from './CarouselImage';

export default function Summary() {
  const {
    displayTags,
    setDisplayTags,
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
                  <div className="carousel-card-grid">
                    <img src="https://assetsio.gnwcdn.com/dniwdj3wwaatqt4.jpg" alt="Imagem 1" />
                    <img src="https://assetsio.gnwcdn.com/dniwyxow4aa27h5.jpg" alt="Imagem 2" />
                    <img src="https://img.hype.games/cdn/3cc10db6-a11b-4641-a9d7-abdd0409c1a305.jpg" alt="Imagem 3" />
                    <img src="https://img.hype.games/cdn/e76ff94f-c137-4c4c-8d9c-50165505b16802.jpg" alt="Imagem 4" />
                    </div>
                  <p>Buy now!</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-content">
                <CarouselImage imgSrc="https://www.yourgameszone.com/wp-content/uploads/2013/08/gta-v.jpg" altText="GTA V" />
                <div className="carousel-card">
                  <h3>Grand Theft Auto V</h3>
                  <div className="carousel-card-grid">
                    <img src="https://img.hype.games/cdn/26f6a3f1-fd9a-4f47-b541-f97f0d16881fGTA_SS3.jpg" alt="Imagem 1" />
                    <img src="https://img.hype.games/cdn/e02f2283-8817-4926-b44c-4f64158c8d10GTA_SS8.jpg" alt="Imagem 2" />
                    <img src="https://img.hype.games/cdn/2bba5b73-f6dd-429b-9b4e-fef16d476db2GTA_SS6.jpg" alt="Imagem 3" />
                    <img src="https://img.hype.games/cdn/b899b8f0-8e7a-4cd6-88bc-2fb261a36430GTA_SS5.jpg" alt="Imagem 4" />
                    </div>
                  <p>Buy now!</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-content">
                <CarouselImage imgSrc="https://assets.nuuvem.com/image/upload/v1/products/618418052f91a002e3f9cf6b/sharing_images/dl3d5ccidn9wlkemhfjr.jpg" altText="Elden Ring" />
                <div className="carousel-card">
                  <h3>Elden Ring</h3>
                  <div className="carousel-card-grid">
                    <img src="https://assets.nuuvem.com/image/upload/t_screenshot_full/v1/products/618418052f91a002e3f9cf6b/screenshots/sulcmvodnhfwgc6i8evb.jpg" alt="Imagem 1" />
                    <img src="https://assets.nuuvem.com/image/upload/t_screenshot_full/v1/products/618418052f91a002e3f9cf6b/screenshots/sbuuvnvhtqnvy2ewmcki.jpg" alt="Imagem 2" />
                    <img src="https://assets.nuuvem.com/image/upload/t_screenshot_full/v1/products/618418052f91a002e3f9cf6b/screenshots/g1i4vs0htckkrfmkeh0m.jpg" alt="Imagem 3" />
                    <img src="https://assets.nuuvem.com/image/upload/t_screenshot_full/v1/products/618418052f91a002e3f9cf6b/screenshots/jxe6nheiwxgwg4ojw6rt.jpg" alt="Imagem 4" />
                    </div>
                  <p>Buy now!</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-content">
                <CarouselImage imgSrc="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_616x353.jpg" altText="Baldur's Gate" />
                <div className="carousel-card">
                  <h3>Baldur's Gate</h3>
                  <div className="carousel-card-grid">
                    <img src="https://s2-techtudo.glbimg.com/9ZeLf7WBO835LCWdJtt4QTPFqIc=/0x0:1920x1080/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/i/1/bIefG6Qha14TbuaT7Qlg/sc81fg.jpg" alt="Imagem 1" />
                    <img src="https://s2-techtudo.glbimg.com/tOJWhjphvbio2OoA_pDTPf6kMDU=/0x0:1920x1080/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/9/l/CoouGLS8CsyVzdRasLdA/ss-b9f6f2d2ac2b7b2fe63d776e8e13c24b481a7b19.1920x1080.jpg" alt="Imagem 2" />
                    <img src="https://s2-techtudo.glbimg.com/2lGHGUv_XL5Nj7_E3VE5gHu3mi4=/0x0:1200x675/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/H/V/ipJWvmT7KqMkBBxjQGxA/lancamentos-semana-baldurs-gate-3-rpg-dungeons-dragons-urso.jpg" alt="Imagem 3" />
                    <img src="https://s2-techtudo.glbimg.com/gkRhqM6SbJLg39lKI4XJd52G2jE=/0x0:1920x1080/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/F/O/y9CmnHRCyhLGIFSg5LRQ/sc81fe.jpg" alt="Imagem 4" />
                    </div>
                  <p>Buy now!</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
