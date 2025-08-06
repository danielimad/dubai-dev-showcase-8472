import React, { createContext, useContext, useState } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': 'Ahmed Hassan',
    'hero.subtitle': 'Full-Stack Web Developer',
    'hero.description': 'Creating modern web experiences in Dubai with cutting-edge technologies',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get In Touch',
    'about.title': 'About Me',
    'about.description': 'Passionate web developer based in Dubai with 5+ years of experience building scalable web applications. I specialize in React, TypeScript, and Node.js, delivering high-quality solutions for businesses across the UAE.',
    'skills.title': 'Skills & Technologies',
    'projects.title': 'Featured Projects',
    'contact.title': 'Get In Touch',
    'contact.description': 'Ready to bring your ideas to life? Let\'s work together.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل معي',
    'hero.title': 'أحمد حسن',
    'hero.subtitle': 'مطور ويب متكامل',
    'hero.description': 'إنشاء تجارب ويب حديثة في دبي باستخدام أحدث التقنيات',
    'hero.cta': 'اعرض أعمالي',
    'hero.contact': 'تواصل معي',
    'about.title': 'نبذة عني',
    'about.description': 'مطور ويب شغوف مقره دبي مع أكثر من 5 سنوات من الخبرة في بناء تطبيقات الويب القابلة للتطوير. أتخصص في React و TypeScript و Node.js، وأقدم حلولاً عالية الجودة للشركات في جميع أنحاء الإمارات.',
    'skills.title': 'المهارات والتقنيات',
    'projects.title': 'المشاريع المميزة',
    'contact.title': 'تواصل معي',
    'contact.description': 'جاهز لإحياء أفكارك؟ دعنا نعمل معاً.',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ar' : 'en')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  React.useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}