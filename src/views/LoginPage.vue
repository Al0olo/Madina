<template>
    <ion-page>
  
      <ion-content :fullscreen="true">
        <div id="container">
          <img src="../assets/icon.png" width="128px" style="position: absolute;top:5rem;left:50%;transform:translateX(-50%)"/>
          <ion-card id="signup-modal">
            <ion-card-header>
              <ion-card-title class="page-title">Login</ion-card-title>
              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
            </ion-card-header>
          
            <ion-card-content>
                <ion-input class="my-3" fill="solid" v-model="data.full_name" placeholder="Name"></ion-input>

                <ion-input class="mb-3" fill="solid" v-model="data.phone_number" placeholder="Mobile Number"></ion-input>
                <!-- <ion-nav-link router-direction="forward" :component="login"> <ion-button id="login-button">{{ ("Sign Up") }} </ion-button></ion-nav-link> -->
                <ion-button @click="signup" id="test-button">{{ ("Sign Up") }} </ion-button>         
              </ion-card-content>

          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent,IonInput,  IonPage,IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton } from '@ionic/vue';
  import HomePage from './IntroPage.vue';
  import {Signup} from '../apis/Auth';
  import { useRouter } from 'vue-router';
  export default {
      components: { IonButton, IonContent, IonPage,IonInput,IonCard,IonCardContent, IonCardHeader, IonCardTitle},
      data() {
        return {
          login: HomePage,
          data: {
            full_name: "",
            phone_number: "",
          }
        };
      },
      setup() {
      const router = useRouter();
      return { router };
      },
      methods: {
        async signup(){
          const data = {
            data : this.data
          }
          const response = await Signup(data);
          if (response.data.message.status_code == 201 || response.data.message.status_code == 202 || response.data.message.status_code == 203){
            console.log("Client");
            this.router.push('/intro');
          }
        }
      }
    };
  </script>top
  
  <style scoped>
  #container {
    text-align: center;
    background: url("../assets/img/signup_background.svg");
    height: 50vh;
    position: absolute;
    top: 0%;
    transform: translateY(0%);
    left: 0;
    right: 0;
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    
    color: #8c8c8c;
    
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  #signup-modal {
    position: absolute;
    top: 50%;
    transform: translateY(10%);
    width:90%;
  }
  ion-button {
    --background: #E1BF7E;
    --color: white;

    --border-radius: 15px;
    --padding-top: 0.7rem;
    --padding-bottom: 0.7rem;
    font-size:1rem;
    display:block;
    width:60%;
    margin:auto;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  ion-input {
    border: 1px solid rgba(0, 0, 0, 0.059);
    border-radius: 5px;
    text-align: left;
    --placeholder-color: #E1BF7E;
    font-weight: bold;
    --placeholder-opacity: 0.9;
    
    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
  }
  .page-title{
    position: relative;
    margin-bottom: 3rem;
  }
  .page-title::after {
    position: absolute;
    content: '';
    width: 5rem;
    height: 8px;
    border-radius: 10px;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    background : #E1BF7E;

  }
  </style>
  