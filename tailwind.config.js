/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage:{
        'custom_gradient': 'linear-gradient(116deg, rgba(14,2,24,1) 66%, rgba(43,21,78,1) 100%)',
        'layer-one-backround':'url(assets/images/mainpage/Vector-Smart-Object10.png)',
        'layer-one-photo':'url(assets/images/mainpage/Layer-21.png)',
        'adobe-audition':'url(assets/images/mainpage/Adobe_Audition.png)',
        'adobe-media-encounder':'url(assets/images/mainpage/Adobe_Media_Encoder_Icon.s.png)',
        'adobe-photoshop':'url(assets/images/mainpage/adobe-photoshop.png)',
        'adobe-premiere':'url(assets/images/mainpage/adobe-premiere-pro-.png)',
        'light-room' :'url(assets/images/mainpage/pngwing.com.png)',
        'after-effect':'url(assets/images/mainpage/aftereffect.png)',
        'sub_bg':'url(assets/images/mainpage/istockphoto-972908868-612x612.jpg)',
      },
      screens: {
        "xs" : "390px",
        "sm" : "640px",
        "md" : "868px",
        "lg" : "1004px",
        "xl" : "1138px",
        "2xl" : "1536px",
        "xs_max" : { max : "390px" },
        "sm_max" : { max : "640px" },
        "md_max" : { max : "868px" },
        "lg_max" : { max : "1004px" },
        "xl_max" : { max : "1138px" },
        "2xl_max" : { max : "1536px" }
      },
    },
  },
  plugins: [],
}
