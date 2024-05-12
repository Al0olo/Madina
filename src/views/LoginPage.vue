<template>
    <ion-page>
  
      <ion-content :fullscreen="true">
        <div id="container">
          <ion-card id="signup-modal">
            <ion-card-header>
              <ion-card-title>Sign Up</ion-card-title>
              <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
            </ion-card-header>
          
            <ion-card-content>
              <ion-item>
                <ion-input fill="solid" placeholder="Name"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input fill="solid" placeholder="Mobile Number"></ion-input>
              </ion-item>
              <ion-nav-link router-direction="forward" :component="login"> <ion-button id="login-button">{{ ("Sign Up") }} </ion-button></ion-nav-link>
            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent,IonInput, IonItem,  IonPage,IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonNavLink } from '@ionic/vue';
  import HomePage from './IntroPage.vue';
  export default {
      components: { IonButton, IonContent, IonNavLink, IonPage,IonInput,IonItem,IonCard,IonCardContent, IonCardHeader, IonCardTitle},
      data() {
        return {
          login: HomePage,
        };
      },
    };
  </script>
  
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
    top: 80%;
    transform: translateY(-50%);
    width:90%;
  }
  </style>
  