<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
  
      <ion-content :fullscreen="true">
        <div id="container">
            <ion-card id="taxi-banner">
                <ion-card-content>
                    <img alt="Silhouette of mountains" src="../assets/img/InsideCityBanner.svg" style="width:100%;height:100%;position:fixed;top:0;left:0" />
                    <ion-nav-link router-direction="forward" :component="insideCity"> <ion-button id="login-button">{{ ("Order Taxi") }} </ion-button></ion-nav-link>
                </ion-card-content>
            </ion-card>
            <ion-card id="taxi-banner">
                <ion-card-content>
                    <img alt="Silhouette of mountains" src="../assets/img/OutsideCityBanner.svg" style="width:100%;height:100%;position:fixed;top:0;left:0" />
                    <ion-nav-link router-direction="forward" :component="OutsideCity"> <ion-button id="login-button">{{ ("Order Taxi") }} </ion-button></ion-nav-link>
                </ion-card-content>
            </ion-card>
            
            <ion-card id="airports-banner">
                <ion-card-content>
                    <img alt="Silhouette of mountains" src="../assets/img/BetweenGovernatesBanner.svg" style="width:100%;height:100%;position:fixed;top:0;left:0" />
                    <ion-nav-link router-direction="forward" :component="Airports"> <ion-button id="login-button">{{ ("Order Taxi") }} </ion-button></ion-nav-link>
                </ion-card-content>
            </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script lang="ts">
  import insideCity from './InsideCityPage.vue';
  import OutsideCity from './OutsideCityPage.vue';
  import Airports from './AirportsPage.vue';


  import { IonContent,  IonPage,IonCard, IonCardContent,IonButton, IonNavLink } from '@ionic/vue';
  
  export default {
      components: { IonContent, IonPage,IonCard,IonCardContent,IonButton, IonNavLink},
      data() {
        return {
          insideCity: insideCity,
          OutsideCity: OutsideCity,
          Airports: Airports,
        };
      },
    };
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    height: 100vh;
    position: absolute;
    top: 5%;
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

  #taxi-banner {
    position:relative;
    /* background-image: url("../assets/img/TaxiBanner.svg"); */
    height: 18.5vh;
    /* background-size: contain; */
  }
  #airports-banner {
    height: 30vh;

  }
  #login-button {
    position:absolute;
    top:150%;
    left:30%;
    z-index: 3000;
  }
  ion-button#login-button {
    --background: black;
    font-weight: bold;
    --color: yellow;

    --border-radius: 25px;
    --padding-top: 0.7rem;
    --padding-bottom: 0.7rem;
    font-size:1rem;
    display:block;
    width:40%;
    margin:auto;
    margin-top:2rem;
    margin-bottom:2rem;
  }
  </style>
  