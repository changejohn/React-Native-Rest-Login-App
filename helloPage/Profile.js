import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

//--------------------------------------------------------------------------------
export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      KullaniciAdi:'',
      Adsoyad:'',
      KullaniciSifre:'',
      Durum:''
    }
    this.addList = this.addList.bind(this);
  }
  addList() {
    var request = new XMLHttpRequest();    
    request.onreadystatechange = (e) => {
      if(request.responseText=='Başarılı')
      {
        this.setState({
          Durum:'Kayıt Başarılı'       
        })         
      }
    };
    request.open('GET', 'http://website.com/home/kullaniciekle?adsoyad='+this.state.Adsoyad+'&kadi='+this.state.KullaniciAdi+'&sifre='+this.state.KullaniciSifre+'');
    request.send();
  }
 
  render() {        
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome to Sign Up Screen</Text>
        <TextInput onChangeText={(Text) => this.setState({Adsoyad:Text})} placeholder="İsim Soyisim" />
        <TextInput onChangeText={(Text) => this.setState({KullaniciAdi:Text})} placeholder="Kullanıcı Adı" />
        <TextInput onChangeText={(Text) => this.setState({KullaniciSifre:Text})} placeholder="Kullanıcı Şifre" />
        <Button title="Kayıt Ol" onPress={() => this.addList()}></Button>
        <Text>{this.state.Durum}</Text>
      </View>
    );
  }
}
  //--------------------------------------------------------------------------------
