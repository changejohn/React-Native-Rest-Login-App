import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';
import React, {Component} from 'react';
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      KullaniciAdi:'',
      KullaniciSifre:'',
      Durum:'',
      Adsoyad:''
    }
    this.GirisYap = this.GirisYap.bind(this);
  }
  GirisYap() {
    var kalite = 0;
    var request = new XMLHttpRequest();    
    request.onreadystatechange = (e) => {
      var cevap = request.responseText;
      if(cevap.length>20){
        
        this.setState({durum:'Giriş Başarılı Hoş Geldin',Adsoyad:cevap.split(':')[1]})
        return;
      }
      else{
        if(kalite==0)
        {
          kalite++
          return;
        }
        this.setState({durum:'Giriş Başarısız !'})
        return;
      }
    };
    request.open('POST', 'http://gumuslerim.com/home/kullanicigiris?kadi='+this.state.KullaniciAdi+'&sifre='+this.state.KullaniciSifre+'');
    request.send();
  }
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
        <Text>Login Application (With Rest Api)</Text>
        <TextInput onChangeText={(Text) => this.setState({KullaniciAdi:Text})} placeholder="Kullanıcı Adı" />
        <TextInput onChangeText={(Text) =>this.setState({KullaniciSifre:Text})} placeholder="Şifre" />
        <Button title="Giriş Yap" onPress={() => this.GirisYap()}/>
        <Button title="Kayıt Ol" style={{marginTop:50}} onPress={() => navigate('Profile')}/>
        <Text style={{marginTop:20}} >{this.state.durum} {this.state.Adsoyad}</Text>
    </View>
      );
    }
  }