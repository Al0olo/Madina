<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
  
      <ion-content :fullscreen="true">
        <div id="container">
            <ion-searchbar placeholder="Search"></ion-searchbar>
            <ion-card id="taxi-banner">
                <ion-card-content>
                    <img alt="Silhouette of mountains" src="../assets/img/TaxiBanner.svg" style="width:100%;height:100%;position:fixed;top:0;left:0" />
                    <ion-nav-link router-direction="forward" :component="orderTaxi"> <ion-button id="login-button">{{ ("Order Taxi") }} </ion-button></ion-nav-link>
                </ion-card-content>
            </ion-card>
            <h2>TAXI MADINA</h2>
            <p style="text-align:left;width:90%;margin:auto">This is a place holder text to be changed with real description, This is a place holder text to be changed with real description, 
                This is a place holder text to be changed with real description, This is a place holder text to be changed with real description, 
                This is a place holder text to be changed with real description, This is a place holder text to be changed with real description, 
                This is a place holder text to be changed with real description, This is a place holder text to be changed with real description, 
                This is a place holder text to be changed with real description, This is a place holder text to be changed with real description, 
                This is a place holder text to be changed with real description, This is a place holder text to be changed with real description, 
            </p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script lang="ts">
  import my from './TaxiOrdersPage.vue';
  import { IonContent,  IonPage,IonCard, IonCardContent, IonSearchbar,IonButton, IonNavLink } from '@ionic/vue';
  
  export default {
      components: { IonContent, IonPage,IonCard,IonCardContent,IonSearchbar,IonButton, IonNavLink},
      data() {
        return {
            orderTaxi: my,
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
  #login-button {
    position:absolute;
    top:220%;
    left:35%;
    z-index: 3000;
  }
  </style>
  