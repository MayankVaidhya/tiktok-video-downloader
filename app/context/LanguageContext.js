'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  EN: { logo: 'Tik Tok Downloader', home: 'Home', about: 'About', contact: 'Contact', title: 'Download TikTok Videos', subtitle: 'Paste your TikTok video URL below to download', placeholder: 'Paste TikTok URL here...', download: 'Download' },
  ES: { logo: 'Descargador de Tik Tok', home: 'Inicio', about: 'Acerca de', contact: 'Contacto', title: 'Descargar Videos de TikTok', subtitle: 'Pega tu URL de video de TikTok abajo para descargar', placeholder: 'Pega la URL de TikTok aquí...', download: 'Descargar' },
  FR: { logo: 'Téléchargeur Tik Tok', home: 'Accueil', about: 'À propos', contact: 'Contact', title: 'Télécharger des Vidéos TikTok', subtitle: 'Collez votre URL vidéo TikTok ci-dessous pour télécharger', placeholder: 'Collez l\'URL TikTok ici...', download: 'Télécharger' },
  DE: { logo: 'Tik Tok Downloader', home: 'Startseite', about: 'Über uns', contact: 'Kontakt', title: 'TikTok Videos Herunterladen', subtitle: 'Fügen Sie Ihre TikTok Video URL unten ein zum Herunterladen', placeholder: 'TikTok URL hier einfügen...', download: 'Herunterladen' },
  IT: { logo: 'Scaricatore Tik Tok', home: 'Home', about: 'Chi siamo', contact: 'Contatto', title: 'Scarica Video TikTok', subtitle: 'Incolla il tuo URL video TikTok qui sotto per scaricare', placeholder: 'Incolla URL TikTok qui...', download: 'Scarica' },
  PT: { logo: 'Baixador Tik Tok', home: 'Início', about: 'Sobre', contact: 'Contato', title: 'Baixar Vídeos TikTok', subtitle: 'Cole sua URL de vídeo TikTok abaixo para baixar', placeholder: 'Cole URL TikTok aqui...', download: 'Baixar' },
  RU: { logo: 'Загрузчик Тик Ток', home: 'Главная', about: 'О нас', contact: 'Контакты', title: 'Скачать Видео TikTok', subtitle: 'Вставьте URL видео TikTok ниже для загрузки', placeholder: 'Вставьте URL TikTok здесь...', download: 'Скачать' },
  ZH: { logo: 'TikTok下载器', home: '首页', about: '关于', contact: '联系', title: '下载TikTok视频', subtitle: '在下方粘贴您的TikTok视频URL进行下载', placeholder: '在此粘贴TikTok URL...', download: '下载' },
  JA: { logo: 'TikTokダウンローダー', home: 'ホーム', about: 'について', contact: 'お問い合わせ', title: 'TikTok動画をダウンロード', subtitle: '下にTikTok動画のURLを貼り付けてダウンロード', placeholder: 'TikTok URLをここに貼り付け...', download: 'ダウンロード' },
  KO: { logo: '틱톡 다운로더', home: '홈', about: '소개', contact: '연락처', title: 'TikTok 비디오 다운로드', subtitle: '아래에 TikTok 비디오 URL을 붙여넣어 다운로드하세요', placeholder: 'TikTok URL을 여기에 붙여넣기...', download: '다운로드' },
  AR: { logo: 'منزل تيك توك', home: 'الرئيسية', about: 'حول', contact: 'اتصال', title: 'تحميل فيديوهات تيك توك', subtitle: 'الصق رابط فيديو تيك توك أدناه للتحميل', placeholder: 'الصق رابط تيك توك هنا...', download: 'تحميل' },
  HI: { logo: 'टिक टॉक डाउनलोडर', home: 'होम', about: 'के बारे में', contact: 'संपर्क', title: 'TikTok वीडियो डाउनलोड करें', subtitle: 'डाउनलोड करने के लिए नीचे अपना TikTok वीडियो URL पेस्ट करें', placeholder: 'TikTok URL यहाँ पेस्ट करें...', download: 'डाउनलोड' },
  BN: { logo: 'টিক টক ডাউনলোডার', home: 'হোম', about: 'সম্পর্কে', contact: 'যোগাযোগ', title: 'TikTok ভিডিও ডাউনলোড করুন', subtitle: 'ডাউনলোড করতে নিচে আপনার TikTok ভিডিও URL পেস্ট করুন', placeholder: 'TikTok URL এখানে পেস্ট করুন...', download: 'ডাউনলোড' },
  UR: { logo: 'ٹک ٹاک ڈاؤن لوڈر', home: 'ہوم', about: 'کے بارے میں', contact: 'رابطہ', title: 'TikTok ویڈیو ڈاؤن لوڈ کریں', subtitle: 'ڈاؤن لوڈ کرنے کے لیے نیچے اپنا TikTok ویڈیو URL پیسٹ کریں', placeholder: 'TikTok URL یہاں پیسٹ کریں...', download: 'ڈاؤن لوڈ' },
  ID: { logo: 'Pengunduh Tik Tok', home: 'Beranda', about: 'Tentang', contact: 'Kontak', title: 'Unduh Video TikTok', subtitle: 'Tempel URL video TikTok Anda di bawah untuk mengunduh', placeholder: 'Tempel URL TikTok di sini...', download: 'Unduh' },
  MS: { logo: 'Pemuat Turun Tik Tok', home: 'Laman Utama', about: 'Mengenai', contact: 'Hubungi', title: 'Muat Turun Video TikTok', subtitle: 'Tampal URL video TikTok anda di bawah untuk memuat turun', placeholder: 'Tampal URL TikTok di sini...', download: 'Muat Turun' },
  TH: { logo: 'ตัวดาวน์โหลด Tik Tok', home: 'หน้าแรก', about: 'เกี่ยวกับ', contact: 'ติดต่อ', title: 'ดาวน์โหลดวิดีโอ TikTok', subtitle: 'วาง URL วิดีโอ TikTok ของคุณด้านล่างเพื่อดาวน์โหลด', placeholder: 'วาง URL TikTok ที่นี่...', download: 'ดาวน์โหลด' },
  VI: { logo: 'Trình Tải Tik Tok', home: 'Trang Chủ', about: 'Giới Thiệu', contact: 'Liên Hệ', title: 'Tải Video TikTok', subtitle: 'Dán URL video TikTok của bạn bên dưới để tải xuống', placeholder: 'Dán URL TikTok tại đây...', download: 'Tải Xuống' },
  TR: { logo: 'Tik Tok İndirici', home: 'Ana Sayfa', about: 'Hakkında', contact: 'İletişim', title: 'TikTok Videoları İndir', subtitle: 'İndirmek için TikTok video URL\'nizi aşağıya yapıştırın', placeholder: 'TikTok URL\'sini buraya yapıştırın...', download: 'İndir' },
  NL: { logo: 'Tik Tok Downloader', home: 'Home', about: 'Over', contact: 'Contact', title: 'TikTok Video\'s Downloaden', subtitle: 'Plak je TikTok video URL hieronder om te downloaden', placeholder: 'Plak TikTok URL hier...', download: 'Downloaden' },
  SV: { logo: 'Tik Tok Nedladdare', home: 'Hem', about: 'Om', contact: 'Kontakt', title: 'Ladda Ner TikTok Videor', subtitle: 'Klistra in din TikTok video URL nedan för att ladda ner', placeholder: 'Klistra in TikTok URL här...', download: 'Ladda Ner' },
  NO: { logo: 'Tik Tok Nedlaster', home: 'Hjem', about: 'Om', contact: 'Kontakt', title: 'Last Ned TikTok Videoer', subtitle: 'Lim inn TikTok video URL nedenfor for å laste ned', placeholder: 'Lim inn TikTok URL her...', download: 'Last Ned' },
  DA: { logo: 'Tik Tok Downloader', home: 'Hjem', about: 'Om', contact: 'Kontakt', title: 'Download TikTok Videoer', subtitle: 'Indsæt din TikTok video URL nedenfor for at downloade', placeholder: 'Indsæt TikTok URL her...', download: 'Download' },
  FI: { logo: 'Tik Tok Lataaja', home: 'Koti', about: 'Tietoja', contact: 'Yhteystiedot', title: 'Lataa TikTok Videot', subtitle: 'Liitä TikTok video URL alle ladataksesi', placeholder: 'Liitä TikTok URL tähän...', download: 'Lataa' },
  PL: { logo: 'Pobieracz Tik Tok', home: 'Strona Główna', about: 'O Nas', contact: 'Kontakt', title: 'Pobierz Filmy TikTok', subtitle: 'Wklej URL filmu TikTok poniżej, aby pobrać', placeholder: 'Wklej URL TikTok tutaj...', download: 'Pobierz' },
  CS: { logo: 'Tik Tok Stahovač', home: 'Domů', about: 'O Nás', contact: 'Kontakt', title: 'Stáhnout TikTok Videa', subtitle: 'Vložte URL TikTok videa níže pro stažení', placeholder: 'Vložte TikTok URL zde...', download: 'Stáhnout' },
  SK: { logo: 'Tik Tok Sťahovač', home: 'Domov', about: 'O Nás', contact: 'Kontakt', title: 'Stiahnuť TikTok Videá', subtitle: 'Vložte URL TikTok videa nižšie na stiahnutie', placeholder: 'Vložte TikTok URL tu...', download: 'Stiahnuť' },
  HU: { logo: 'Tik Tok Letöltő', home: 'Főoldal', about: 'Rólunk', contact: 'Kapcsolat', title: 'TikTok Videók Letöltése', subtitle: 'Illessze be a TikTok videó URL-jét alább a letöltéshez', placeholder: 'Illessze be a TikTok URL-t ide...', download: 'Letöltés' },
  RO: { logo: 'Descărcător Tik Tok', home: 'Acasă', about: 'Despre', contact: 'Contact', title: 'Descarcă Videouri TikTok', subtitle: 'Lipește URL-ul video TikTok mai jos pentru a descărca', placeholder: 'Lipește URL-ul TikTok aici...', download: 'Descarcă' },
  BG: { logo: 'Tik Tok Изтеглящ', home: 'Начало', about: 'За Нас', contact: 'Контакт', title: 'Изтегли TikTok Видеа', subtitle: 'Поставете URL на TikTok видео по-долу за изтегляне', placeholder: 'Поставете TikTok URL тук...', download: 'Изтегли' },
  HR: { logo: 'Tik Tok Preuzimač', home: 'Početna', about: 'O Nama', contact: 'Kontakt', title: 'Preuzmi TikTok Videozapise', subtitle: 'Zalijepite URL TikTok videozapisa ispod za preuzimanje', placeholder: 'Zalijepite TikTok URL ovdje...', download: 'Preuzmi' },
  SR: { logo: 'Tik Tok Преузимач', home: 'Почетна', about: 'О Нама', contact: 'Контакт', title: 'Преузми TikTok Видео', subtitle: 'Налепите URL TikTok видеа испод за преузимање', placeholder: 'Налепите TikTok URL овде...', download: 'Преузми' },
  UK: { logo: 'Завантажувач Tik Tok', home: 'Головна', about: 'Про Нас', contact: 'Контакт', title: 'Завантажити TikTok Відео', subtitle: 'Вставте URL TikTok відео нижче для завантаження', placeholder: 'Вставте TikTok URL тут...', download: 'Завантажити' },
  EL: { logo: 'Κατεβαστής Tik Tok', home: 'Αρχική', about: 'Σχετικά', contact: 'Επικοινωνία', title: 'Κατεβάστε Βίντεο TikTok', subtitle: 'Επικολλήστε το URL του βίντεο TikTok παρακάτω για λήψη', placeholder: 'Επικολλήστε το URL TikTok εδώ...', download: 'Κατεβάστε' },
  HE: { logo: 'מוריד Tik Tok', home: 'בית', about: 'אודות', contact: 'צור קשר', title: 'הורד סרטוני TikTok', subtitle: 'הדבק את כתובת URL של סרטון TikTok למטה כדי להוריד', placeholder: 'הדבק כתובת URL של TikTok כאן...', download: 'הורד' },
  FA: { logo: 'دانلودر تیک تاک', home: 'خانه', about: 'درباره', contact: 'تماس', title: 'دانلود ویدیوهای TikTok', subtitle: 'URL ویدیو TikTok خود را در زیر جهت دانلود قرار دهید', placeholder: 'URL TikTok را اینجا قرار دهید...', download: 'دانلود' },
  SW: { logo: 'Kipakuzi cha Tik Tok', home: 'Nyumbani', about: 'Kuhusu', contact: 'Mawasiliano', title: 'Pakua Video za TikTok', subtitle: 'Bandika URL ya video ya TikTok hapa chini ili kupakua', placeholder: 'Bandika URL ya TikTok hapa...', download: 'Pakua' },
  AM: { logo: 'ቲክ ቶክ ዳውንሎደር', home: 'ቤት', about: 'ስለ እኛ', contact: 'ግንኙነት', title: 'TikTok ቪዲዮዎችን ያውርዱ', subtitle: 'ለማውረድ የ TikTok ቪዲዮ URL ን ከታች ይለጥፉ', placeholder: 'TikTok URL እዚህ ይለጥፉ...', download: 'አውርድ' },
  YO: { logo: 'Tik Tok Gbigbale', home: 'Ile', about: 'Nipa Wa', contact: 'Olubasọrọ', title: 'Gba Awọn Fidio TikTok', subtitle: 'Fi URL fidio TikTok rẹ si isalẹ lati gba', placeholder: 'Fi TikTok URL si ibi...', download: 'Gba' },
  AF: { logo: 'Tik Tok Aflaai', home: 'Tuis', about: 'Oor Ons', contact: 'Kontak', title: 'Laai TikTok Videos Af', subtitle: 'Plak jou TikTok video URL hieronder om af te laai', placeholder: 'Plak TikTok URL hier...', download: 'Aflaai' },
  MY: { logo: 'Tik Tok ဒေါင်းလုဒ်', home: 'အိမ်', about: 'အကြောင်း', contact: 'ဆက်သွယ်ရန်', title: 'TikTok ဗီဒီယိုများ ဒေါင်းလုဒ်လုပ်ပါ', subtitle: 'ဒေါင်းလုဒ်လုပ်ရန် သင့် TikTok ဗီဒီယို URL ကို အောက်တွင် ကူးထည့်ပါ', placeholder: 'TikTok URL ကို ဤနေရာတွင် ကူးထည့်ပါ...', download: 'ဒေါင်းလုဒ်' },
  KM: { logo: 'កម្មវិធីទាញយក Tik Tok', home: 'ទំព័រដើម', about: 'អំពី', contact: 'ទំនាក់ទំនង', title: 'ទាញយកវីដេអូ TikTok', subtitle: 'បិទភ្ជាប់ URL វីដេអូ TikTok របស់អ្នកខាងក្រោមដើម្បីទាញយក', placeholder: 'បិទភ្ជាប់ URL TikTok នៅទីនេះ...', download: 'ទាញយក' },
  LO: { logo: 'ໂປຣແກຣມດາວໂຫລດ Tik Tok', home: 'ໜ້າຫຼັກ', about: 'ກ່ຽວກັບ', contact: 'ຕິດຕໍ່', title: 'ດາວໂຫລດວິດີໂອ TikTok', subtitle: 'ວາງ URL ວິດີໂອ TikTok ຂອງທ່ານຂ້າງລຸ່ມນີ້ເພື່ອດາວໂຫລດ', placeholder: 'ວາງ URL TikTok ທີ່ນີ້...', download: 'ດາວໂຫລດ' },
  SI: { logo: 'Tik Tok බාගත කරන්නා', home: 'මුල් පිටුව', about: 'අප ගැන', contact: 'සම්බන්ධතා', title: 'TikTok වීඩියෝ බාගත කරන්න', subtitle: 'බාගත කිරීම සඳහා ඔබේ TikTok වීඩියෝ URL පහත අලවන්න', placeholder: 'TikTok URL මෙහි අලවන්න...', download: 'බාගත කරන්න' },
  NE: { logo: 'टिक टक डाउनलोडर', home: 'घर', about: 'हाम्रो बारेमा', contact: 'सम्पर्क', title: 'TikTok भिडियोहरू डाउनलोड गर्नुहोस्', subtitle: 'डाउनलोड गर्न तल आफ्नो TikTok भिडियो URL टाँस्नुहोस्', placeholder: 'TikTok URL यहाँ टाँस्नुहोस्...', download: 'डाउनलोड' },
  DZ: { logo: 'ཏིག་ཏོག་ཕབ་ལེན་པ།', home: 'ཁྱིམ།', about: 'ང་ཚོའི་སྐོར།', contact: 'འབྲེལ་བ།', title: 'TikTok གློག་བརྙན་ཕབ་ལེན།', subtitle: 'ཕབ་ལེན་བྱེད་པར་ཁྱེད་ཀྱི་ TikTok གློག་བརྙན་གྱི་ URL འོག་ཏུ་སྦྱར།', placeholder: 'TikTok URL འདིར་སྦྱར།...', download: 'ཕབ་ལེན།' },
  MN: { logo: 'Тик Ток Татагч', home: 'Нүүр', about: 'Бидний тухай', contact: 'Холбоо барих', title: 'TikTok видео татах', subtitle: 'Татахын тулд TikTok видео URL-ээ доор наана уу', placeholder: 'TikTok URL-ээ энд наана уу...', download: 'Татах' },
  KK: { logo: 'Тик Ток Жүктеуші', home: 'Басты бет', about: 'Біз туралы', contact: 'Байланыс', title: 'TikTok бейнелерін жүктеу', subtitle: 'Жүктеу үшін TikTok бейне URL мекенжайын төменде қойыңыз', placeholder: 'TikTok URL мекенжайын осында қойыңыз...', download: 'Жүктеу' },
  KY: { logo: 'Тик Ток Жүктөөчү', home: 'Башкы бет', about: 'Биз жөнүндө', contact: 'Байланыш', title: 'TikTok видеолорун жүктөө', subtitle: 'Жүктөө үчүн TikTok видео URL дарегин төмөнкү жерге коюңуз', placeholder: 'TikTok URL дарегин бул жерге коюңуз...', download: 'Жүктөө' },
  UZ: { logo: 'Tik Tok Yuklovchi', home: 'Bosh sahifa', about: 'Biz haqimizda', contact: 'Aloqa', title: 'TikTok videolarini yuklab olish', subtitle: 'Yuklab olish uchun TikTok video URL manzilini quyida joylashtiring', placeholder: 'TikTok URL manzilini shu yerga joylashtiring...', download: 'Yuklab olish' },
  TJ: { logo: 'Боргиркунандаи Тик Ток', home: 'Саҳифаи асосӣ', about: 'Дар бораи мо', contact: 'Тамос', title: 'Боргирии видеоҳои TikTok', subtitle: 'Барои боргирӣ URL-и видеои TikTok-ро дар поён ҷойгир кунед', placeholder: 'URL-и TikTok-ро дар ин ҷо ҷойгир кунед...', download: 'Боргирӣ' },
  TK: { logo: 'Tik Tok Ýükleýji', home: 'Baş sahypa', about: 'Biz barada', contact: 'Habarlaşmak', title: 'TikTok wideolaryny ýükläň', subtitle: 'Ýüklemek üçin TikTok wideo URL-ni aşakda goýuň', placeholder: 'TikTok URL-ni şu ýere goýuň...', download: 'Ýükläň' },
  AZ: { logo: 'Tik Tok Yükləyici', home: 'Ana səhifə', about: 'Haqqımızda', contact: 'Əlaqə', title: 'TikTok videolarını yükləyin', subtitle: 'Yükləmək üçün TikTok video URL-ni aşağıda yerləşdirin', placeholder: 'TikTok URL-ni burada yerləşdirin...', download: 'Yükləyin' },
  HY: { logo: 'Տիկ Տոկ Ներբեռնիչ', home: 'Գլխավոր', about: 'Մեր մասին', contact: 'Կապ', title: 'Ներբեռնել TikTok տեսանյութեր', subtitle: 'Ներբեռնելու համար ձեր TikTok տեսանյութի URL-ը տեղադրեք ստորև', placeholder: 'TikTok URL-ը տեղադրեք այստեղ...', download: 'Ներբեռնել' },
  KA: { logo: 'ტიკ ტოკ ჩამომტვირთველი', home: 'მთავარი', about: 'ჩვენს შესახებ', contact: 'კონტაქტი', title: 'TikTok ვიდეოების ჩამოტვირთვა', subtitle: 'ჩამოსატვირთად ჩასვით თქვენი TikTok ვიდეოს URL ქვემოთ', placeholder: 'TikTok URL ჩასვით აქ...', download: 'ჩამოტვირთვა' },
  ET: { logo: 'Tik Tok Allalaadija', home: 'Avaleht', about: 'Meist', contact: 'Kontakt', title: 'Laadi alla TikTok videod', subtitle: 'Allalaadimiseks kleebi oma TikTok video URL alla', placeholder: 'Kleebi TikTok URL siia...', download: 'Laadi alla' },
  LV: { logo: 'Tik Tok Lejupielādētājs', home: 'Sākums', about: 'Par mums', contact: 'Kontakti', title: 'Lejupielādēt TikTok video', subtitle: 'Lejupielādēšanai ielīmējiet savu TikTok video URL zemāk', placeholder: 'Ielīmējiet TikTok URL šeit...', download: 'Lejupielādēt' },
  LT: { logo: 'Tik Tok Atsisiuntėjas', home: 'Pradžia', about: 'Apie mus', contact: 'Kontaktai', title: 'Atsisiųsti TikTok vaizdo įrašus', subtitle: 'Atsisiuntimui įklijuokite savo TikTok vaizdo įrašo URL žemiau', placeholder: 'Įklijuokite TikTok URL čia...', download: 'Atsisiųsti' },
  SL: { logo: 'Tik Tok Prenašalnik', home: 'Domov', about: 'O nas', contact: 'Stik', title: 'Prenesi TikTok videoposnetke', subtitle: 'Za prenos prilepite URL svojega TikTok videoposnetka spodaj', placeholder: 'Prilepite TikTok URL tukaj...', download: 'Prenesi' },
  MK: { logo: 'Тик Ток Симнувач', home: 'Дома', about: 'За нас', contact: 'Контакт', title: 'Симни TikTok видеа', subtitle: 'За симнување залепи го URL-то на твоето TikTok видео подолу', placeholder: 'Залепи го TikTok URL-то тука...', download: 'Симни' },
  SQ: { logo: 'Shkarkuesi i Tik Tok', home: 'Kryesore', about: 'Rreth nesh', contact: 'Kontakt', title: 'Shkarkoni videot e TikTok', subtitle: 'Për të shkarkuar ngjitni URL-në e videos suaj TikTok më poshtë', placeholder: 'Ngjitni URL-në e TikTok këtu...', download: 'Shkarkoni' },
  MT: { logo: 'Tik Tok Downloader', home: 'Dar', about: 'Dwarna', contact: 'Kuntatt', title: 'Niżżel Vidjows TikTok', subtitle: 'Biex tniżżel waħħal il-URL tal-vidjo TikTok tiegħek hawn taħt', placeholder: 'Waħħal URL TikTok hawn...', download: 'Niżżel' },
  IS: { logo: 'Tik Tok Niðurhalari', home: 'Heim', about: 'Um okkur', contact: 'Samband', title: 'Sækja TikTok myndbönd', subtitle: 'Til að sækja límdu TikTok myndbands URL hér að neðan', placeholder: 'Límdu TikTok URL hér...', download: 'Sækja' },
  GA: { logo: 'Íoslódálaí Tik Tok', home: 'Baile', about: 'Fúinn', contact: 'Teagmháil', title: 'Íoslódáil Físeáin TikTok', subtitle: 'Chun íoslódáil greamaigh URL do fhíseáin TikTok thíos', placeholder: 'Greamaigh URL TikTok anseo...', download: 'Íoslódáil' },
  LB: { logo: 'Tik Tok Downloader', home: 'Doheem', about: 'Iwwer eis', contact: 'Kontakt', title: 'TikTok Videoen eroflueden', subtitle: 'Fir erofzelueden kleeft Är TikTok Video URL ënnendrënner', placeholder: 'Kleeft TikTok URL hei...', download: 'Eroflueden' },
  RM: { logo: 'Tik Tok Downloader', home: 'Chasa', about: 'Davart nus', contact: 'Contact', title: 'Telechargiar videos TikTok', subtitle: 'Per telechargiar incollai voss URL da video TikTok sutvart', placeholder: 'Incollai URL TikTok qua...', download: 'Telechargiar' },
  FO: { logo: 'Tik Tok Niðurtakari', home: 'Heim', about: 'Um okkum', contact: 'Samband', title: 'Tak TikTok videor niður', subtitle: 'Fyri at taka niður, lím TikTok video URL her niðanfyri', placeholder: 'Lím TikTok URL her...', download: 'Tak niður' }
};

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && translations[savedLang]) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('selectedLanguage', langCode);
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.EN[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};