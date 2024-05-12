<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
  
      <ion-content :fullscreen="true">
        <div id="container">
            <ion-searchbar placeholder="Search"></ion-searchbar>
            <ion-card id="taxi-banner">
                <ion-card-content>
                    <img alt="Silhouette of mountains" src="../assets/img/InsideCityBanner.svg" style="width:100%;height:100%;position:fixed;top:0;left:0" />
                  <ion-button id="login-button">{{ ("Order Taxi") }} </ion-button>
                </ion-card-content>
            </ion-card>
            <ion-card id="taxi-banner">
                <ion-card-content>
                    <img alt="Silhouette of mountains" src="../assets/img/OutsideCityBanner.svg" style="width:100%;height:100%;position:fixed;top:0;left:0" />
                  <ion-button id="login-button">{{ ("Order Taxi") }} </ion-button>
                </ion-card-content>
            </ion-card>
            
            <ion-card id="airports-banner">
                <ion-card-content>
                    <img alt="Silhouette of mountains" src="../assets/img/BetweenGovernatesBanner.svg" style="width:100%;height:100%;position:fixed;top:0;left:0" />
                  <ion-button id="login-button">{{ ("Order Taxi") }} </ion-button>
                </ion-card-content>
            </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script lang="ts">
//   import my from './HomePage.vue';
  import { IonContent,  IonPage,IonCard, IonCardContent, IonSearchbar,IonButton, IonNavLink } from '@ionic/vue';
  
  export default {
      components: { IonContent, IonPage,IonCard,IonCardContent, IonSearchbar,IonButton, IonNavLink},
      data() {
        return {
            // lo: my,
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
    top:220%;
    left:35%;
    z-index: 3000;
  }
  </style>
  