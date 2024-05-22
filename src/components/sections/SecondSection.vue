<template>
    <div>
        <section class="container">

        </section>
    </div>
</template>

<script>


export default {
    name: 'SecondSection',
    props: {
      Head: {
        type:String,
        default:""
      },
    },
    components: {},
  data(){
    return{
      imgItems: [
        {title:"Android",
          thumbnail: require('../../assets/slides/badge.png'),
          description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
        },
        {title:"IOS",
          thumbnail: require('../../assets/slides/073e304b0da1a3516e43c41ee0e53ed1.png'),
          description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
        },
        {
          title:"Flutter",
          thumbnail: require('../../assets/slides/mad_reports_5e254d641d2281579502948.webp'),
          description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
        },
        {title:"Web",
          thumbnail: require('../../assets/slides/Update.png'),
          description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
        },
        {title:"Hybrid",
          thumbnail: require('../../assets/slides/mad_reports_5e254d641d2281579502948 copy.png'),
          description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
        },
        {title:"Native",
          thumbnail: require('../../assets/slides/website-UAE-1-1024x683.jpg'),
          description: 'We prioritize creating seamless user experiences in cross-platform app development.'
        },
        {title:"Native",
          thumbnail: require('../../assets/slides/website-UAE-1-1024x683.jpg'),
          description: 'We prioritize creating seamless user experiences in cross-platform app development.'
        },
        {title:"Native",
          thumbnail: require('../../assets/slides/website-UAE-1-1024x683 copy.png'),
          description: 'We prioritize creating seamless user experiences in cross-platform app development.'
        }
      ],
    }
  }




}

</script>

<style scoped>
.head-title {
    text-align: center;
    font-size: 40px;
}

.standard-input-filed {
    background-color: transparent;
    border: 1px solid #db0d0d;
    height: 50px;
    width: 95%;
    border-radius: 5px;
    margin: 5px;
    color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));


}
</style>
