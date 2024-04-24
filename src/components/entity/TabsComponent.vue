<template>
  <div class="container main-section font-weight-700">
    <ul class="position-relative tabs__header d-flex justify-content-around border-bottom border-secondary pb-2 mt-5">
      <li
          v-for="(tab, index) in tabs" class="cursor-pointer"
          :key="tab.title"
          @click="selectTab(index)"
          :class='{"tabs-selected pointer position-relative": index === selectedIndex, "pointer": index === selectedIndex}'>
        {{ tab.title }}
      </li>
    </ul>
    <div  v-for="(tab, index) in tabs" class="d-flex justify-content-center"
          :key="tab.title">
      <Tab :title="tab.title" :content="tab.content" :imgItems="tab.imgItems" :isActive="index === selectedIndex"></Tab>

    </div>


    <slot></slot>
  </div>
</template>

<script>
import Tab from './../entity/TabComponent.vue'

export default {
  components:{
    Tab
  },
  data () {
    return {
      selectedIndex: 2, // the index of the selected tab,
      tabs: [{title:"Mobile",content:"first",
        imgItems: [
          {title:"IOS",
            thumbnail: require('../../assets/card/Apple.webp'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {title:"Android",
            thumbnail: require('../../assets/card/Android.webp'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },

          {title:"React Native",
            thumbnail: require('../../assets/card/React.webp'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          },
          {
            title:"Flutter",
            thumbnail: require('../../assets/card/Flutter.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },
          {title:"Ionic",
            thumbnail: require('../../assets/card/ionic.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },

          {title:"Swift",
            thumbnail: require('../../assets/card/Swift.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },

          {title:"Kotlin",
            thumbnail: require('../../assets/card/Kotlin.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },

          {title:"Objective C",
            thumbnail: require('../../assets/card/Objective.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },
        ],

      },{title:"Front-End",content:"dsawwe32",
        imgItems: [
          {title:"Angular JS",
            thumbnail: require('../../assets/card/Angular JS.webp'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"React JS",
            thumbnail: require('../../assets/card/React.webp'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"Typescript",
            thumbnail: require('../../assets/card/Typescript.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },
          {title:"Vue",
            thumbnail: require('../../assets/card/Vue.webp'),
            description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
          },
          {title:"WPF",
            thumbnail: require('../../assets/card/WPF.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },
          {title:"HTML5",
            thumbnail: require('../../assets/card/HTML5.webp'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          }
        ],
      },
        {title:"Database",content:"23423",
        imgItems: [
          {title:"MongoDB",
            thumbnail: require('../../assets/card/MongoDB.webp'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"MySQL",
            thumbnail: require('../../assets/card/MySQL.webp'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"MsSQL",
            thumbnail: require('../../assets/card/MsSQL.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },
          {title:"Firebase",
            thumbnail: require('../../assets/card/Firebase.webp'),
            description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
          },
          {title:"DynamoDB",
            thumbnail: require('../../assets/card/DynamoDB.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },
          {title:"Redis",
            thumbnail: require('../../assets/card/Redis.webp'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          }
        ],},{title:"Back-End",content:"qwe",
        imgItems: [
          {title:"PHP",
            thumbnail: require('../../assets/card/PHP.webp'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"Java",
            thumbnail: require('../../assets/card/Java.webp'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"Node.JS",
            thumbnail: require('../../assets/card/Node.JS.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },

        ],},{title: "CMS",content:"qweqwe",
        imgItems: [
          {title:"WordPress",
            thumbnail: require('../../assets/card/WordPress.webp'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"Magento",
            thumbnail: require('../../assets/card/Magento.webp'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"Shopify",
            thumbnail: require('../../assets/card/Shopify.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },

        ],},{title: "Infra and DevOps",content:"qweqwe",
        imgItems: [
          {title:"AWS",
            thumbnail: require('../../assets/card/AWS.webp'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"Gradle",
            thumbnail: require('../../assets/card/Gradle.webp'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"Jenkins",
            thumbnail: require('../../assets/card/Jenkins.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },
          {title:"Appium",
            thumbnail: require('../../assets/card/Appium.webp'),
            description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
          },
          {title:"Selenium",
            thumbnail: require('../../assets/card/Selenium.webp'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },
          {title:"Azure",
            thumbnail: require('../../assets/card/Azure.webp'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          },
          {title:"Digital Ocean",
            thumbnail: require('../../assets/card/Digital Ocean.webp'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          },
          {title:"Rackspace",
            thumbnail: require('../../assets/card/Rackspace.webp'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          },
          {title:"Linode",
            thumbnail: require('../../assets/card/Linode.webp'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          }
        ],}]         //

    }

  },


  methods: {
    selectTab (i) {
      this.selectedIndex = i

      // loop over all the tabs

    }
  }
}
</script>
<style scoped>
.tabs-selected:after {
  position: absolute;
  content: "";
  background-image: linear-gradient(90deg, var(--main-color), var(--second-color),var(--third-color));
  width: 100%;
  height: 3px;
top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.main-section{

  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 50%;
  padding-top: 80px;
  padding-bottom: 80px;
}
.font-weight-700{
  font-weight: 700;
}
.cursor-pointer{
  cursor: pointer;
}
</style>
