import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';


const Favorites = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys disponiveis" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;