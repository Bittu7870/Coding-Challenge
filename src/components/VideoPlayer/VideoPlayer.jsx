import { useEffect, useRef } from "react";
import "shaka-player/dist/controls.css";
import shaka from "shaka-player/dist/shaka-player.ui.js";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const manifestUri =
      "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd";
    const player = new shaka.Player(videoRef.current);

    player
      .load(manifestUri)
      .catch((error) => console.error("Error loading manifest:", error));

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <video
        ref={videoRef}
        className="w-full h-full"
        controls
        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
      />
    </div>
  );
};

export default VideoPlayer;
