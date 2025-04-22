import Image from 'next/image';
import Link from 'next/link';
import ICU from '../public/icu.png';
import { useLanguage } from './LanguageContext';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function About() {
 const { language } = useLanguage();

 const content = {
  tr: {
   title: "Hakkımda",
   greeting: "Merhaba! Ben",
   name: "Ömer Halis DEMİR",
   education: "İstanbul Ticaret Üniversitesi Elektrik-Elektronik Mühendisliği bölümünde eğitim gördüm.",
   paragraph1: "Üniversitenin dördüncü yılında, kariyerime yeni bir yön vermeye karar verdim ve yazılım alanına yoğunlaştım. Bu süreçte, internet üzerinden çeşitli kaynaklardan ve eğitim videolarından faydalanarak kendimi geliştirdim. Ayrıca, üniversite eğitimim devam ederken Europe Coding School'dan Tam Yığın Geliştirici(Fullstack Developer) eğitimi aldım. Altı ay süren bu eğitimi başarıyla tamamladıktan sonra web sitesi geliştirmeye başladım.",
   paragraph2: "Şu an yazılım alanında ilerliyor ve her gün yeni bilgiler edinerek kendimi geliştirmeye devam ediyorum. Geçmişte yaşadığım zorluklara rağmen, tutkularımın peşinden gidiyor ve hedeflerime adım adım yaklaşıyorum.",
   fullName: "İsim Soyisim",
   birthDate: "Doğum Tarihi",
   city: "Şehir",
   university: "Üniversite ve Bölüm",
   universityTooltip: "İstanbul Ticaret Üniversitesi\nElektrik Elektronik Mühendisliği\n(2018-2025)",
   email: "Email",
   cvPath: "/cv.pdf"
  },
  en: {
   title: "About Me",
   greeting: "Hello! I'm",
   name: "Ömer Halis DEMİR",
   education: "I studied Electrical and Electronics Engineering at Istanbul Commerce University.",
   paragraph1: "In my fourth year of university, I decided to give a new direction to my career and focused on software development. During this process, I improved myself by utilizing various resources and educational videos on the internet. Additionally, while continuing my university education, I received Fullstack Developer training from Europe Coding School. After successfully completing this six-month training, I started developing websites.",
   paragraph2: "Currently, I am advancing in the software field and continuing to improve myself by learning new information every day. Despite the challenges I've faced in the past, I'm pursuing my passions and approaching my goals step by step.",
   fullName: "Name & Surname",
   birthDate: "Birth Date",
   city: "City",
   university: "University & Department",
   universityTooltip: "Istanbul Commerce University\nElectrical and Electronics Engineering\n(2018-2025)",
   email: "Email",
   cvPath: "/cv-english.pdf"
  }
 };

 return (
  <section id="about" className="pt-30 pb-20 bg-gray-800">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
     <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
     <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-10 items-center">
     <div className="space-y-6">
      <p className="text-gray-300">
       {content[language].greeting} <span className="text-blue-500 font-semibold">{content[language].name}</span>.
       {' '}{content[language].education}
      </p>
      <p className="text-gray-300">
       {content[language].paragraph1}
      </p>
      <p className="text-gray-300">
       {content[language].paragraph2}
      </p>
     </div>

     <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-600 transition duration-300 col-span-2">
       <div className="text-xl md:text-3xl font-bold text-blue-500 mb-2">Ömer Halis DEMİR</div>
       <div className="text-gray-300 text-sm">{content[language].fullName}</div>
      </div>

      <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-600 transition duration-300">
       <div className="text-xl md:text-3xl font-bold text-blue-500 mb-2">29.03.1998</div>
       <div className="text-gray-300 text-sm">{content[language].birthDate}</div>
      </div>

      <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-600 transition duration-300">
       <div className="text-xl md:text-3xl font-bold text-blue-500 mb-2">İstanbul</div>
       <div className="text-gray-300 text-sm">{content[language].city}</div>
      </div>

      <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-600 transition duration-300 group relative col-span-2">
       <Link href={language === 'tr' ? "https://ticaret.edu.tr/" : "https://ticaret.edu.tr/en/"} target="_blank" rel="noopener noreferrer" className="w-full">
        <div className="relative w-full">
         <div className="absolute top-3 right-0">
          <Image src={ICU} alt="İTİCÜ" width={30} height={30} />
         </div>
        </div>
        <div className="text-xl md:text-3xl font-bold text-blue-500 mb-2">
         {language === 'tr' ? 'İTİCÜ - EEM' : 'ICU - EEE'}
        </div>
        <div className="text-gray-300 text-sm">{content[language].university}</div>
        <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-800 text-white p-2 rounded shadow-lg bottom-full mb-2 z-10 w-60 text-center whitespace-pre-line">
         {content[language].universityTooltip}
        </div>
       </Link>
      </div>

      <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-600 transition duration-300 group relative overflow-hidden">
       <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-500 mb-2 truncate w-full">omerhd16@outlook.com</div>
       <div className="text-gray-300 text-sm">{content[language].email}</div>
      </div>

      <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:bg-gray-600 transition duration-300 group relative">
       <div className="flex items-center justify-center gap-3 sm:gap-5 mt-1">
        <Link
         href="https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/"
         target="_blank"
         rel="noopener noreferrer"
         className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-[#0077b5] text-[#0077b5] hover:text-white hover:bg-[#0077b5] transition duration-500"
        >
         <FaLinkedin size={20} />
        </Link>
        <Link
         href="https://github.com/omerhd34"
         target="_blank"
         rel="noopener noreferrer"
         className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-[#ff0000] text-[#ff0000] hover:text-white hover:bg-[#ff0000] transition duration-500"
        >
         <FaGithub size={20} />
        </Link>
        <Link
         href={content[language].cvPath}
         target="_blank"
         rel="noopener noreferrer"
         className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-300 hover:text-white hover:bg-black transition duration-500 font-bold text-sm"
        >
         CV
        </Link>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}