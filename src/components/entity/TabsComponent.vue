<template>

  <div class="container  font-weight-700">
    <ul class="d-lg-flex d-md-flex d-none position-relative tabs__header d-flex justify-content-around border-bottom border-secondary pb-2 mt-5">
      <li
          v-for="(tab, index) in tabs" class="cursor-pointer"
          :key="tab.title"
          @click="selectTab(index)"
          :class='{"tabs-selected pointer position-relative": index === selectedIndex, "pointer": index === selectedIndex}'>
        {{ tab.title }}
      </li>
    </ul>

    <ul class="d-lg-none d-md-none position-relative tabs__header d-flex justify-content-around border-bottom border-secondary pb-2 mt-5">
      <li
          v-for="(tab, index) in tabs" class="cursor-pointer"
          :key="tab.title"
          @click="selectTab(index)"
          :class='{"tabs-selected pointer position-relative": index === selectedIndex, "pointer": index === selectedIndex ,"d-none": index > 3 }'>
        {{ tab.title }}
      </li>
    </ul>  <ul class="d-lg-none d-md-none position-relative tabs__header d-flex justify-content-around border-bottom border-secondary pb-2 mt-5">
      <li
          v-for="(tab, index) in tabs" class="cursor-pointer"
          :key="tab.title"
          @click="selectTab(index)"
          :class='{"tabs-selected pointer position-relative": index === selectedIndex, "pointer": index === selectedIndex,"d-none": index <= 3 }'>
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
            thumbnail: require('../../assets/card/icons/Mobile/Apple.png'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {title:"Android",
            thumbnail: require('../../assets/card/icons/Mobile/Android.png'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },

          {title:"React Native",
            thumbnail: require('../../assets/card/icons/Mobile/React.png'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          },
          {
            title:"Flutter",
            thumbnail: require('../../assets/card/icons/Mobile/Flutter.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },
          {title:"Ionic",
            thumbnail: require('../../assets/card/icons/Mobile/Ionic.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },

          {title:"Swift",
            thumbnail: require('../../assets/card/icons/Mobile/Swift.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },

          {title:"Kotlin",
            thumbnail: require('../../assets/card/icons/Mobile/Kotline.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },

          {title:"Objective C",
            thumbnail: require('../../assets/card/icons/Mobile/ObjectC.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },
        ],

      },{title:"Front-End",content:"dsawwe32",
        imgItems: [
          {title:"Angular JS",
            thumbnail: require('../../assets/card/icons/Front end/Angulor.png'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"React JS",
            thumbnail: require('../../assets/card/icons/Front end/React.png'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"Typescript",
            thumbnail: require('../../assets/card/icons/Front end/TypeScript.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },
          {title:"Vue",
            thumbnail: require('../../assets/card/icons/Front end/Vue.png'),
            description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
          },
          {title:"WPF",
            thumbnail: require('../../assets/card/icons/Front end/WPF.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },
          {title:"HTML5",
            thumbnail: require('../../assets/card/icons/Front end/HTML5.png'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          }
        ],
      },
        {title:"Database",content:"23423",
        imgItems: [
          {title:"MongoDB",
            thumbnail: require('../../assets/card/icons/Data base/MongoDB_Logo.svg.png'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"MySQL",
            thumbnail: require('../../assets/card/icons/Data base/MySQL.png'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"MsSQL",
            thumbnail: require('../../assets/card/icons/Data base/MsSql.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },
          {title:"Firebase",
            thumbnail: require('../../assets/card/icons/Data base/Firebase.png'),
            description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
          },
          {title:"DynamoDB",
            thumbnail: require('../../assets/card/icons/Data base/DynamoDB.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },
          {title:"Redis",
            thumbnail: require('../../assets/card/icons/Data base/Redis.png'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          }
        ],},{title:"Back-End",content:"qwe",
        imgItems: [
          {title:"PHP",
            thumbnail: require('../../assets/card/icons/Back end/PHP.png'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"Java",
            thumbnail: require('../../assets/card/icons/Back end/Java.png'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"Node.JS",
            thumbnail: require('../../assets/card/icons/Back end/node js.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },

        ],},{title: "CMS",content:"qweqwe",
        imgItems: [
          {title:"WordPress",
            thumbnail: require('../../assets/card/icons/CMS/Wordpress.png'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"Magento",
            thumbnail: require('../../assets/card/icons/CMS/magento.png'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"Shopify",
            thumbnail: require('../../assets/card/icons/CMS/shopify.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },

        ],},{title: "Infra and DevOps",content:"qweqwe",
        imgItems: [
          {title:"AWS",
            thumbnail: require('../../assets/card/icons/Infra/AWS.png'),
            description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
          },
          {title:"Gradle",
            thumbnail: require('../../assets/card/icons/Infra/Gradle.png'),
            description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
          },
          {
            title:"Jenkins",
            thumbnail: require('../../assets/card/icons/Infra/Jenkins.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          },
          {title:"Appium",
            thumbnail: require('../../assets/card/icons/Infra/Appium.png'),
            description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
          },
          {title:"Selenium",
            thumbnail: require('../../assets/card/icons/Infra/Selenium.png'),
            description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
          },
          {title:"Azure",
            thumbnail: require('../../assets/card/icons/Infra/Azure.png'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          },
          {title:"Digital Ocean",
            thumbnail: require('../../assets/card/icons/Infra/DigitalOcean.png'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          },
          {title:"Rackspace",
            thumbnail: require('../../assets/card/icons/Infra/Rackspace.png'),
            description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          },
          {title:"Linode",
            thumbnail: require('../../assets/card/icons/Infra/Linode.png'),
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
