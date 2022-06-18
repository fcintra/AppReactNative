import React from "react"
import {
    View, Text, StyleSheet, SafeAreaView, StatusBar, 
    Image, Pressable, Linking
} from 'react-native'

const colorGithub = '#010409';
const imagemProfileGithub = 'https://avatars.githubusercontent.com/u/84300004?v=4';
const colorFontGithub = '#C9D1D9';
const colorFontGithubDARK = '#4F565E';

const URL_PROFILE = 'https://github.com/fcintra';



const App = () =>{
    const handlePressGoToGithub = async () => {
     console.log('Estamos verificando o link')
     const res = await Linking.canOpenURL(URL_PROFILE)
        if(res){
            console.log('Abrindo o link')
            await Linking.openURL(URL_PROFILE)
        }
    }

    return <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image accessibilityLabel="Foto de perfil" style={style.avatar} source={{uri: imagemProfileGithub}}/>
                <Text accessibilityLabel="Nome: Matheus Cintra" style={[style.defaultText, style.name]}>Matheus Cintra</Text>
                <Text accessibilityLabel="Usuario: fcintra" style={[style.defaultText, style.nickName]}>fcintra</Text>
                <Text accessibilityLabel="Descrição: Olá, me chamo Matheus, tenho 19 anos. 
                    Estou no 5° período do curso de 
                    Ciência da Computação. Estou em busca de uma 
                    oportunidade na área de desenvolvimento web." style={[style.defaultText, style.description]}>
                    Olá, me chamo Matheus, tenho 19 anos. 
                    Estou no 5° período do curso de 
                    Ciência da Computação. Estou em busca de uma 
                    oportunidade na área de desenvolvimento web.
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>

          
    </SafeAreaView>
};

export default App;

const style = StyleSheet.create({
    container:{ // Column
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela toda
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,       
    },
    nickName:{
        fontSize: 18,
        color: colorFontGithubDARK,
    },
    description:{
        textAlign: 'justify',
        fontWeight: 'bold',
        fontSize: 14,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorFontGithubDARK,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },
   
});