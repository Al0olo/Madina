<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
  
      <ion-content :fullscreen="true">
        <div id="container">
            <ion-card id="taxi-banner">
                <ion-card-content>
                    <img alt="Silhouette of mountains" src="../assets/img/InsideCityBanner.svg" style="width:100%;height:100%;position:fixed;top:0;left:0" />
                </ion-card-content>
            </ion-card>
            <ion-card id="ways-card">
                <ion-card-content>
                    <ion-radio-group value="">
                      <ion-radio value="one" label-placement="start" style="display:block;width:60%;font-size:1.7rem;color:black;font-weight:bold">One Way</ion-radio>
                      <ion-radio value="two" label-placement="start" style="display:block;width:60%;font-size:1.7rem;color:black;font-weight:bold">Two Ways</ion-radio>
                    </ion-radio-group>
                </ion-card-content>
            </ion-card>
            <ion-card id="form-card">
                <ion-card-content>
                    <ion-select label="From" label-placement="floating">
                      <ion-select-option value="apple">Apple</ion-select-option>
                      <ion-select-option value="banana">Banana</ion-select-option>
                      <ion-select-option value="orange">Orange</ion-select-option>
                    </ion-select>
                    <ion-select label="To" label-placement="floating">
                      <ion-select-option value="apple">Apple</ion-select-option>
                      <ion-select-option value="banana">Banana</ion-select-option>
                      <ion-select-option value="orange">Orange</ion-select-option>
                    </ion-select>
                    <ion-input style="text-align:left" fill="solid" placeholder="Waiting Time"></ion-input>
                    <ion-input style="text-align:left" fill="solid" placeholder="Mobile Number"></ion-input>
                    <ion-button>5 Min</ion-button>
                    <ion-button>10 Min</ion-button>
                    <ion-button>15 Min</ion-button>
                    <ion-button>20 Min</ion-button>
                    <ion-button>25 Min</ion-button>

                    <ion-button style='display:block'>Order Now</ion-button>

                    
                </ion-card-content>
            </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script lang="ts">
//   import my from './HomePage.vue';
  import { IonContent,  IonPage,IonCard, IonCardContent,IonRadio, IonRadioGroup,IonSelect, IonSelectOption,IonInput,IonButton } from '@ionic/vue';
  
  export default {
      components: { IonContent, IonPage,IonCard,IonCardContent,IonRadio, IonRadioGroup,IonSelect, IonSelectOption,IonInput,IonButton},
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
  #ways-card {
    background: #E1BF7E;
    height: 18.5vh;
  }
  ion-radio {
    --border-radius: 8px;
    --inner-border-radius: 8px;

    --color: #ddd;
    /* --color-checked: #6815ec; */
  }

  ion-radio.ios::part(container) {
    width: 30px;
    height: 30px;

    border: 4px solid #ddd;
    border-radius: 4px;
  }

  .radio-checked.ios::part(container) {
    border-color: #000000;
    background-color: #000000
  }
  </style>
  