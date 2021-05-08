import React, { useEffect, useRef } from 'react'
import { View, Text } from 'react-native';
import { Episode } from '../../types';
import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import styles from './styles'; 


interface VideoPlayerProps {
    episode: Episode;
}


const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    const [status, setStatus] = React.useState({});
    const video = useRef<Playback>(null);

    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video},
                {},
                false
            );
        })();
    }, [episode]);

    return (
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: episode.video,
            }}
            posterSource={{
                uri: episode.poster,
            }}
            posterStyle={{
                resizeMode: 'cover',
            }}
            usePoster={true}
            useNativeControls
            resizeMode="contain"
            // isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    )
}

export default VideoPlayer;