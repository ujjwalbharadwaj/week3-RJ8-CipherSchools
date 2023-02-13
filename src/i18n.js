import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"

i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
         
    resources:{
        en:{
            translation:{
                "To get started, edit <1>src/App/.js<1>":
                "Wlcome to Reat",
                welcome:"Hello "
            },
        },
        de:{
            translation:{
                "To get started, edit <1>src/App/.js<1>":
                "Wlcome to Reat",
                welcome:"Hello "
            },
        },
    },
    fallbacking:"en",
    debug:true,
    
 //have a common namespace used arounf the full app
     ns:["translation"],
     defaultNS:"trasnlations",
     
     keySeparator: false, //use constant as keys

     interpolation:{
        escapeValue:false,
     },


 });
 export default i18n;