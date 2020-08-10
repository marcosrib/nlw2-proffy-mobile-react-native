import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number

}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function handleLinkWhassap() {
   Linking.openURL(`whatsapp://send?phone=11969239022`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/43934564?s=460&u=7faea7c408b7d6d8a891507539c1843198904dae&v=4' }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Marcos</Text>
          <Text style={styles.subject}>Quimica</Text>
        </View>
      </View>
      <Text style={styles.bio}>é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora{'  '}
          <Text style={styles.priceValue}>R$ 30,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutlineIcon} />*/}
            <Image source={unFavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;