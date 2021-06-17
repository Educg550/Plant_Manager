import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import { ProfileHeader } from '../components/ProfileHeader'
import colors from '../styles/colors'

export function MyPlants() {
    return (
        <View style={styles.container}>
          <ProfileHeader />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background,
    },
})
