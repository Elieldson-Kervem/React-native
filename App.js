import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button, TouchableOpacity} from 'react-native';
let timer=null
let ss=0
let mm=0
let hh=0
export default function App() {
  //vou precisar do tempo em ss,mm,hh
  const [numero,setNumero]=useState("00:00:00")
  const [botao,setBotao]=useState('Go')
  const [ultimo,setUltimo]=useState(null)
 

  function Go(){
       if(timer !==null){
        clearInterval(timer);
        timer=null
        //quando o clicar de novo para parar
        setBotao('Start')
       }
       else{
        //vou criar um contador
        timer=setInterval(()=>{
          ss++
          if(ss == 60){
               ss=0
               mm++
          }
          if(mm==60){
            mm=0;
            hh++
          }
          let formate=(hh < 10 ? '0'+hh:hh)+':'+(mm < 10 ? '0'+mm:mm)+':'+(ss < 10 ? '0'+ss:ss);
          setNumero(formate)
        },10000);
        setBotao("Stop")
       }
  }

  function Clear(){
    if(timer !==null){
      clearInterval(timer)
      timer=null
    }
    setUltimo(numero)
    setNumero('00:00:00');
    ss=0
    mm=0
    hh=0
    setBotao('Start')
  }

  //function beging

  //posso color o valor dentro de variavel
  return (
    <View style={styles.container}>
      
      
      <Image source={require('./src/crono.png')}></Image>

      <View style={{marginTop:20}}>
      <Text style={styles.txt}>{numero}</Text>
      <TouchableOpacity style={styles.btn} onPress={Go}> 
        <Text style={styles.btnTxt}>{botao}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn,styles.btn2]} onPress={Clear}> 
        <Text style={styles.btnTxt}>Refresh</Text>
        
      </TouchableOpacity>
      
      </View>
      <Text style={styles.texto}>{ultimo ?`Seu ultimo tempo foi ${ultimo}`:' '}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop:-20,
    flex: 1,
    backgroundColor: '#161F37',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  btn:{
    marginTop:110,
    
    width:200,
    height:50,
    borderRadius:7,
    backgroundColor:'#2AE4A5',
    color:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  btn2:{
    marginTop:20,
   
  },
  txt:{
    marginTop:-180,
    fontSize:50,
    color:'#2AE4A5',

  },
  btnTxt:{
    fontSize:30,
    fontFamily: "Roboto",
  },
  texto:{
    marginTop:20,
    fontSize:20,
    fontFamily:'Roboto',
    color:'#fff',
    
  }
});
