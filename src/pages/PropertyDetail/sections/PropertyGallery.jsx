import { useEffect, useMemo, useState } from "react";
import {
  X,
  Image as ImageIcon,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PropertyGallery({ property }) {
  const images = property.images || [];
  const videos = property.videos || [];

  const media = useMemo(
    () => [
      ...images.map((src) => ({
        type: "image",
        src,
      })),
      ...videos.map((src) => ({
        type: "video",
        src,
      })),
    ],
    [images, videos],
  );

  const imageIndexes = useMemo(
    () =>
      media
        .map((item, index) => (item.type === "image" ? index : null))
        .filter((index) => index !== null),
    [media],
  );

  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [direction, setDirection] = useState(1);

  const activeMedia = media[active];
  const previousMedia = previous !== null ? media[previous] : null;

  // ---------------------------------------------------------------------------
  // Reset when property changes
  // ---------------------------------------------------------------------------
  useEffect(() => {
    setActive(0);
    setPrevious(null);
    setIsTransitioning(false);
  }, [property?.id]);

  // ---------------------------------------------------------------------------
  // Change image with shutter transition
  // ---------------------------------------------------------------------------
  const changeImage = (nextIndex, nextDirection = 1) => {
    if (nextIndex === active || isTransitioning || !media[nextIndex]) {
      return;
    }

    setDirection(nextDirection);
    setPrevious(active);
    setActive(nextIndex);
    setIsTransitioning(true);

    setTimeout(() => {
      setPrevious(null);
      setIsTransitioning(false);
    }, 850);
  };

  // ---------------------------------------------------------------------------
  // Automatic 3 second carousel
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (imageIndexes.length <= 1 || lightbox || isTransitioning) {
      return;
    }

    const timer = setTimeout(() => {
      const currentImagePosition = imageIndexes.indexOf(active);

      const nextImagePosition =
        (currentImagePosition + 1) % imageIndexes.length;

      changeImage(imageIndexes[nextImagePosition], 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [active, imageIndexes, lightbox, isTransitioning]);

  // ---------------------------------------------------------------------------
  // Previous
  // ---------------------------------------------------------------------------
  const goToPrevious = () => {
    if (media.length <= 1 || isTransitioning) return;

    const currentPosition = media.findIndex((_, index) => index === active);

    const nextIndex =
      currentPosition <= 0 ? media.length - 1 : currentPosition - 1;

    changeImage(nextIndex, -1);
  };

  // ---------------------------------------------------------------------------
  // Next
  // ---------------------------------------------------------------------------
  const goToNext = () => {
    if (media.length <= 1 || isTransitioning) return;

    const nextIndex = active >= media.length - 1 ? 0 : active + 1;

    changeImage(nextIndex, 1);
  };

  // ---------------------------------------------------------------------------
  // Thumbnail selection
  // ---------------------------------------------------------------------------
  const selectMedia = (index) => {
    if (index === active || isTransitioning) return;

    changeImage(index, index > active ? 1 : -1);
  };

  // ---------------------------------------------------------------------------
  // Shutter panels
  // ---------------------------------------------------------------------------
  const renderShutterPanels = () => {
    if (!isTransitioning || previousMedia?.type !== "image") {
      return null;
    }

    const panels = [0, 1, 2, 3];

    return (
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        {panels.map((panel) => {
          const isEven = panel % 2 === 0;

          return (
            <div
              key={panel}
              className="absolute top-0 h-full w-1/4"
              style={{
                left: `${panel * 25}%`,
                backgroundImage: `url(${previousMedia.src})`,
                backgroundSize: "400% 100%",
                backgroundPosition: `${panel * 33.333}% center`,
                backgroundRepeat: "no-repeat",
                transform: isEven ? "translateY(-105%)" : "translateY(105%)",
                animation: `shutterPanel ${
                  700 + panel * 80
                }ms cubic-bezier(0.65, 0, 0.35, 1) forwards`,
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section
      data-testid="property-gallery"
      className="scroll-mt-24 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <style>
        {`
          @keyframes shutterPanel {
            0% {
              transform: translateY(0);
            }

            100% {
              transform: translateY(
                var(--shutter-direction, -105%)
              );
            }
          }
        `}
      </style>

      <div className="mx-auto max-w-6xl">
        {/* ================================================================
            MAIN CAROUSEL
        ================================================================= */}
        <div className="relative overflow-hidden rounded-3xl border border-black/6 bg-black">
          {media.length > 0 ? (
            <div className="relative aspect-video w-full overflow-hidden">
              {/* ------------------------------------------------------------
                  NEXT IMAGE — ALWAYS BEHIND
              ------------------------------------------------------------- */}
              {activeMedia?.type === "image" ? (
                <img
                  key={`active-${active}`}
                  src={activeMedia.src}
                  alt={`${property.title} - Image ${active + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  onClick={() => {
                    if (!isTransitioning) {
                      setLightbox(true);
                    }
                  }}
                />
              ) : (
                <video
                  key={`video-${active}`}
                  src={activeMedia.src}
                  controls
                  playsInline
                  className="absolute inset-0 h-full w-full object-contain"
                />
              )}

              {/* ------------------------------------------------------------
                  OLD IMAGE — SPLIT INTO PANELS
              ------------------------------------------------------------- */}
              {renderShutterPanels()}

              {/* ------------------------------------------------------------
                  LEFT ARROW
              ------------------------------------------------------------- */}
              {media.length > 1 && (
                <button
                  type="button"
                  onClick={goToPrevious}
                  disabled={isTransitioning}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/65 disabled:pointer-events-none"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* ------------------------------------------------------------
                  RIGHT ARROW
              ------------------------------------------------------------- */}
              {media.length > 1 && (
                <button
                  type="button"
                  onClick={goToNext}
                  disabled={isTransitioning}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/65 disabled:pointer-events-none"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}

              {/* ------------------------------------------------------------
                  DOTS
              ------------------------------------------------------------- */}
              {imageIndexes.length > 1 && (
                <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm">
                  {imageIndexes.map((imageIndex) => (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() => selectMedia(imageIndex)}
                      disabled={isTransitioning}
                      aria-label={`Go to image ${imageIndex + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        active === imageIndex
                          ? "h-2.5 w-7 bg-white"
                          : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-[#f9fafb]">
              <ImageIcon className="h-12 w-12 text-[#748c70]/40" />
            </div>
          )}
        </div>

        {/* ================================================================
            THUMBNAILS
        ================================================================= */}
        {media.length > 1 && (
          <div className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {media.map((item, i) => (
              <button
                key={`${item.type}-${i}`}
                type="button"
                onClick={() => selectMedia(i)}
                disabled={isTransitioning}
                aria-label={
                  item.type === "video"
                    ? `Play video ${i + 1}`
                    : `View image ${i + 1}`
                }
                className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  active === i
                    ? "border-[#748c70] opacity-100"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="aspect-16/10 w-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0a192f]">
                        <Play className="ml-0.5 h-4 w-4 fill-current" />
                      </span>
                    </div>

                    <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      Video
                    </span>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={`${property.title} thumbnail ${i + 1}`}
                    className="aspect-16/10 w-full object-cover"
                    loading="lazy"
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* ================================================================
            LIGHTBOX
        ================================================================= */}
        {lightbox && activeMedia?.type === "image" && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
            onClick={() => setLightbox(false)}
          >
            <button
              type="button"
              onClick={() => setLightbox(false)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {media.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <img
              src={activeMedia.src}
              alt={`${property.title} - Image ${active + 1}`}
              className="max-h-[85vh] max-w-[85vw] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {media.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              {active + 1} / {media.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
