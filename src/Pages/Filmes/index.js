import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Filme extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => alert(this.props.data.descricao)}>
                    <Image style={styles.capaFilme} source={{uri: this.props.data.foto}}/>
                </TouchableOpacity>
                <Text style={styles.nomeFilme}>{this.props.data.nome}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    nomeFilme:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 18
    },
    capaFilme:{
        width: 200,
        height: 80,
        alignSelf: 'center',
        borderRadius: 20,
        resizeMode: 'center' 
    }
})