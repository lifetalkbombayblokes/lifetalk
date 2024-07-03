'use client'
import { useEffect, useRef } from 'react';

// Define a type for the props
interface VideoPlayerProps {
    src: string;
    width: number;
    height: number;
    className: string
}

export default function VideoPlayer({ src, width, height, className }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;  // Mute the video to allow autoplay
            video.play().then(() => {
                console.log("Video is playing");
            }).catch(error => {
                console.error("Failed to autoplay video:", error);
            });
        }
    }, []);

    return (
        <video
            className={className}
            ref={videoRef}
            width={width}
            height={height}
            preload="none"
            muted
            autoPlay
            playsInline
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
