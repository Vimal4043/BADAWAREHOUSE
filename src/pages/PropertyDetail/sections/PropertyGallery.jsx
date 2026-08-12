import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Image as ImageIcon,
  Play,
} from 'lucide-react'

export default function PropertyGallery({ property }) {
  const images = property.images || []
  const videos = property.videos || []

  const media = [
    ...images.map((src) => ({
      type: 'image',
      src,
    })),
    ...videos.map((src) => ({
      type: 'video',
      src,
    })),
  ]

  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const activeMedia = media[active]

  return (
    <section
      data-testid="property-gallery"
      className="scroll-mt-24 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Main Media */}
        <div className="relative overflow-hidden rounded-3xl border border-black/6 bg-black">
          {media.length > 0 ? (
            activeMedia.type === 'video' ? (
              <video
                key={activeMedia.src}
                src={activeMedia.src}
                controls
                playsInline
                className="aspect-video w-full object-contain"
              />
            ) : (
              <img
                src={activeMedia.src}
                alt={`${property.title} - Image ${active + 1}`}
                className="aspect-video w-full cursor-pointer object-cover"
                onClick={() => setLightbox(true)}
              />
            )
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-[#f9fafb]">
              <ImageIcon className="h-12 w-12 text-[#748c70]/40" />
            </div>
          )}

          {/* Counter */}
          {media.length > 1 && (
            <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
              {active + 1} / {media.length}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {media.length > 1 && (
          <div className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {media.map((item, i) => (
              <button
                key={`${item.type}-${i}`}
                onClick={() => setActive(i)}
                aria-label={
                  item.type === 'video'
                    ? `Play video ${i + 1}`
                    : `View image ${i + 1}`
                }
                className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                  active === i
                    ? 'border-[#748c70] opacity-100'
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                {item.type === 'video' ? (
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

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && activeMedia?.type === 'image' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
              onClick={() => setLightbox(false)}
            >
              <button
                onClick={() => setLightbox(false)}
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={activeMedia.src}
                alt={`${property.title} - Image ${active + 1}`}
                className="max-h-[85vh] max-w-full rounded-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}