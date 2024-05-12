<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
  
      <ion-content :fullscreen="true">
        <div id="container">
            <ion-card id="taxi-banner">
                <ion-card-content>
                    <ion-radio-group value="">
                      <ion-radio value="one" label-placement="start" style="display:block;width:60%;font-size:1.7rem;color:black;font-weight:bold">One Way</ion-radio>
                      <ion-radio value="two" label-placement="start" style="display:block;width:60%;font-size:1.7rem;color:black;font-weight:bold">Two Ways</ion-radio>
                    </ion-radio-group>
                </ion-card-content>
            </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script lang="ts">
//   import my from './HomePage.vue';
  import { IonContent,  IonPage,IonCard, IonCardContent,IonRadio, IonRadioGroup } from '@ionic/vue';
  
  export default {
      components: { IonContent, IonPage,IonCard,IonCardContent,IonRadio, IonRadioGroup},
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
  