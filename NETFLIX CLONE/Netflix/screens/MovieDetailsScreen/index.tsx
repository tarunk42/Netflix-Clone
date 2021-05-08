import React, { useState } from 'react'
import { Image, Pressable, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo,Feather, AntDesign } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';
import VideoPlayer from '../../components/VideoPlayer';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];  
  


const MovieDetailsScreen = () => {

    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0]);
    const seasonNames = movie.seasons.items.map(season => season.name);


    return (
        <View>
            {/* <Image style={styles.image} source={{ uri: firstEpisode.poster}}/> */}
            <VideoPlayer episode={currentEpisode} />
            
            <FlatList
                data={currentSeason.episodes.items}
                renderItem= {({ item }) => <EpisodeItem episode={item} onPress={setCurrentEpisode} />}
                style={{ marginBottom: 230,}}
                ListHeaderComponent={(

                    <View style={{padding: 12, backgroundColor: 'black'}}>
                        <Text style={styles.title}> {movie.title} </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.match}> 98% match </Text>
                            <Text style={styles.year}> {movie.year} </Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}> 12+ </Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />
                        </View>
                        {/*Play Button*/}
                        <Pressable onPress={() => {console.warn('Plage')}} style={styles.playButton}>
                            <Text style={styles.playText}>
                                <Entypo name="controller-play" size={24} color="black" />
                                Play
                            </Text>                  
                        </Pressable>
                        {/*Download Button */}
                        <Pressable onPress={() => {console.warn('Plage')}} style={styles.downloadButton}>
                            <Text style={styles.downloadText}>
                                <Entypo name="download" size={24} color="white" />
                                {'  '}                            
                                Download
                            </Text>                  
                        </Pressable>

                        <Text style={{marginVertical: 10 }}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>
                        
                        {/*Row with icon buttons */}
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <View style={{alignItems: 'center', marginHorizontal: 20,}}>
                                <Entypo name="plus" size={24} color="white" />
                                <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                            </View>
                            <View style={{alignItems: 'center', marginHorizontal: 20,}}>
                                <Feather name="thumbs-up" size={24} color="white" />
                                <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                            </View>
                            <View style={{alignItems: 'center', marginHorizontal: 20,}}>
                                <Feather name="send" size={24} color="white" />  
                                <Text style={{color: 'darkgrey', marginTop: 5}}>Share</Text>
                            </View>
                        </View>

                        <Picker
                            style={{color: 'white', width: 130}}
                            selectedValue={currentSeason.name}
                            dropdownIconColor= {'white'}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(movie.seasons.items[itemIndex])
                            }}>
                            {seasonNames.map(seasonName => (
                                <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                            ))}
                        </Picker>



                    </View>


                )}
            />
        </View>
    )
};

export default MovieDetailsScreen;
