import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landimgImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import giveClasesImg from '../../assets/images/icons/give-classes.png';
import heartImg from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';



const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('connections').then(response => {
     const { total } = response.data;
     setTotalConnections(total);
    })
  }, [])

  function handleNavigationToGiveClassesPage() {
    navigate('GiveClasses')
  }
  function handleNavigationToStudyTabsPage() {
    navigate('StudyTabs')
  }

  return (
    <View style={styles.container}>
      <Image source={landimgImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <RectButton
          onPress={handleNavigationToStudyTabsPage}
          style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyImg} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigationToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClasesImg} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>Total de {totalConnections} conexões já realidas.{' '}
        <Image source={heartImg} />
      </Text>

    </View>
  )
}

export default Landing;