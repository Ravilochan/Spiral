import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

export default function LiveStream() {
    const playerRef = React.useRef();
    return (
        <ReactHlsPlayer
          playerRef={playerRef}
          src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
          autoPlay={true}
          controls={true}
          width="100%"
          height="auto"
          hlsConfig={{
            lowLatencyMode: true,
          }}
        />
    )
}
