import React from 'react';
import { View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={() => navigation.navigate('Landing')}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>

        <Image source={logoImg} resizeMode='contain' />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;