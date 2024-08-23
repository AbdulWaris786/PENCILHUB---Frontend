/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(116deg, rgba(14,2,24,1) 66%, rgba(43,21,78,1) 100%)',
        'layer-one-backround':'url(/assets/images/Vector-Smart-Object10.png)',
        'layer-one-photo':'url(/assets/images/Layer-21.png)',
        'adobe-audition':'url(/assets/images/Adobe_Audition.png)',
        'adobe-media-encounder':'url(/assets/images/Adobe_Media_Encoder_Icon.s.png)',
        'adobe-photoshop':'url(/assets/images/adobe-photoshop.png)',
        'adobe-premiere':'url(/assets/images/adobe-premiere-pro-.png)',
        'light-room' :'url(/assets/images/pngwing.com.png)',
        'after-effect':'url(/assets/images/aftereffect.png)',
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
