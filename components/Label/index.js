import React from 'react';
import { asset, VrButton, View, Text, Image } from 'react-vr';

import styles from './styles';

const Label = (props) => (
  <View style={[styles.caption, props.style]}>
      <VrButton style={styles.leftItem} onClick={props.onEyeClick}>
          <Image
              source={asset('icons/eye.png')}
              style={styles.icon}
          />
      </VrButton>
      <VrButton style={styles.middleItem} onClick={props.onInfoClick}>
          <Image
              source={asset('icons/info.png')}
              style={styles.icon}
          />
      </VrButton>
      <View style={styles.rightItem}>
          <Text style={styles.heading}>{props.heading}</Text>
      </View>
  </View>
);

export default Label;
