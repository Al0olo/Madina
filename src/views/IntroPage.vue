<!-- eslint-disable vue/no-unused-components -->
<template>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end" :edge="true">
    <ion-fab-button>
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
    <ion-page id="main-content">
      <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
      <ion-content :fullscreen="true">
        <div id="container">
            <ion-searchbar placeholder="Search"></ion-searchbar>
            <ion-card id="taxi-banner">
                <ion-card-content>
                    <img alt="Silhouette of mountains" src="../assets/img/TaxiBanner.svg" style="width:100%;height:100%;position:fixed;top:0;left:0" />
                    <ion-nav-link router-direction="forward" :component="orderTaxi"> <ion-button id="login-button">{{ ("Order Taxi") }} </ion-button></ion-nav-link>
                </ion-card-content>
            </ion-card>
            <h2 style="font-weight:bold;padding-bottom:0.5rem;padding-top:1rem;border-bottom:5px solid yellow;width:50%;margin:auto;margin-bottom:1rem;">TAXI MADINA</h2>
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
  import { IonButtons,IonContent,  IonPage,IonCard, IonCardContent, IonSearchbar,IonButton, IonNavLink,IonHeader, IonMenu, IonMenuButton,IonTitle, IonToolbar } from '@ionic/vue';
  import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
  import { add } from 'ionicons/icons';
  
  export default {
      components: { IonFab, IonFabButton, IonIcon, IonButtons,IonContent,IonCard,IonCardContent,IonSearchbar,IonButton, IonNavLink,IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar},
      data() {
        return {
            orderTaxi: my,
        };
      },
      setup() {
        return { add };
      },
    };
  </script>
  
  <style scoped>

  #container {
    text-align: center;
    height: 100vh;
    position: absolute;
    top: 11%;
    transform: translateY(0%);
    left: 0;
    right: 0;
  }
  ion-fab {
  margin-bottom: var(--ion-safe-area-bottom, 0);
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
    top:150%;
    left:20%;
    z-index: 3000;
  }
  ion-button#login-button {
    --background: black;
    font-weight: bold;
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
  </style>
  