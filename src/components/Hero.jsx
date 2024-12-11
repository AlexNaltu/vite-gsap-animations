import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useGsap } from "gsap-react";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideo] = useState(0);

  const totalVideos = 4;
 
  const nextVRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideo((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1)
    {
      isLoading(false);
    }
  }, [loadedVideos]);

  const handleVideoMdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };
  return <div>Hero</div>;
};

export default Hero;
